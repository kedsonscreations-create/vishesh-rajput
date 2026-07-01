export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ContentIdea {
  id: string;
  title: string;
  description: string;
  niche: string;
  contentType: string;
  viralScore: number;
  estimatedViews: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  script: string;
  hashtags: string[];
  keywords: string[];
  thumbnailIdea: string;
}

export interface MonetizationData {
  estimatedTime: string;
  estimatedSubscribers: number;
  estimatedWatchTime: number;
  estimatedMonthlyIncome: number;
  recommendedSources: string[];
}

export interface Channel {
  id: string;
  name: string;
  niche: string;
  targetAudience: string;
  country: string;
  language: string;
  goal: string[];
  uploadFrequency: string;
}
