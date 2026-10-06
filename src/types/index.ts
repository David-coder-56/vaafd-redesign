export interface Program {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'education' | 'orphan-care' | 'health' | 'water' | 'vocational' | 'agriculture' | 'scholarship';
  image: string;
  iconName: string;
  stats: string;
  statsLabel: string;
  beneficiaries: string;
  location: string;
  features: string[];
}

export interface Campaign {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  raised: number;
  goal: number;
  donorsCount: number;
  category: string;
  image: string;
  isUrgent?: boolean;
  featured?: boolean;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  updates: {
    date: string;
    title: string;
    content: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  quote: string;
  image: string;
  location: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface DonationFormData {
  amount: number;
  frequency: 'one-time' | 'monthly';
  campaignId: string;
  firstName: string;
  lastName: string;
  email: string;
  message?: string;
  isAnonymous?: boolean;
  paymentMethod: 'card' | 'paypal' | 'offline';
}
