import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const PIXEL_ID = process.env.META_PIXEL_ID || '1031140289908433';
const ACCESS_TOKEN =
  process.env.META_ACCESS_TOKEN ||
  'EAFzGloW5T2cBSYVYCWPrQyVZA3mo8OLZBJE84bFCvTUHmseXcmGMsVAqkNOxJ1x7Jy7siDSEdppvDyN2sleLkgl9YpR3XNT7zrblckMJTeesAj62m1ZBSgGZCelSNjb23nqZBhLkNAKa91WjZC6OZBRhqVX5QbwDqb4ZASlWGlIKl9HZCYAXlJEPT3H5WLqlgpAZDZD';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', pixelId: PIXEL_ID, hasToken: Boolean(ACCESS_TOKEN) });
  });

  // Meta Conversions API (CAPI) Proxy Endpoint
  app.post('/api/fb-capi', async (req, res) => {
    try {
      const { eventName, eventId, eventSourceUrl, customData, userData } = req.body;

      // Extract client IP and User Agent
      const clientIp =
        (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() ||
        req.socket.remoteAddress ||
        '';
      const clientUserAgent = req.headers['user-agent'] || '';

      const eventPayload = {
        data: [
          {
            event_name: eventName || 'Contact',
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId || `ev_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            event_source_url: eventSourceUrl || req.headers.referer || '',
            action_source: 'website',
            user_data: {
              client_ip_address: clientIp,
              client_user_agent: clientUserAgent,
              ...(userData?.fbp ? { fbp: userData.fbp } : {}),
              ...(userData?.fbc ? { fbc: userData.fbc } : {}),
            },
            custom_data: {
              ...(customData || {}),
              value: customData?.value ?? 249000,
              currency: customData?.currency ?? 'IDR',
            },
          },
        ],
      };

      const metaUrl = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

      const metaResponse = await fetch(metaUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventPayload),
      });

      const result = await metaResponse.json();

      if (!metaResponse.ok) {
        console.error('Meta CAPI Error:', result);
        return res.status(metaResponse.status).json({ success: false, error: result });
      }

      return res.json({ success: true, result });
    } catch (err: any) {
      console.error('Server CAPI Error:', err);
      return res.status(500).json({ success: false, message: err?.message || 'Internal error' });
    }
  });

  // Vite middleware for development vs Static build for production
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
