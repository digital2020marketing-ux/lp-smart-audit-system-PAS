export interface VideoDemoItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  youtubeId: string;
  youtubeUrl: string;
  description: string;
  thumbnailUrl: string;
}

export interface WorksheetItem {
  id: string;
  category: 'PERSIAPAN' | 'PELAKSANAAN' | 'TEMUAN & PELAPORAN';
  name: string;
  description: string;
  format: string;
  clauses?: string[];
}

export interface PlorCase {
  id: string;
  title: string;
  department: string;
  clause: string;
  rawFinding: string;
  problem: string;
  location: string;
  objectiveEvidence: string;
  requirement: string;
  capaSuggestion: {
    rootCause: string;
    correction: string;
    correctiveAction: string;
    preventiveAction: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}
