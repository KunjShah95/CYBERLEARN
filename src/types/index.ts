export interface Module {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  duration: string;
  topics: string[];
}

export interface Challenge {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  points: number;
  solved: boolean;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  difficulty: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
}