// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'collector' | 'artist' | 'admin';
  isLoggedIn: boolean;
}

// Artwork interface
export interface Artwork {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  price: number;
  imageUrl: string;
  thumbnailUrl: string;
  fractalsAvailable: number;
  totalFractals: number;
  description?: string;
  tags?: string[];
  createdAt: Date;
}

// Navigation interface
export interface NavigationItem {
  label: string;
  path: string;
  requiresAuth?: boolean;
}

// About page interfaces
export interface Founder {
  id: string;
  name: string;
  title: string;
  education: string;
  description: string;
  contact: string;
  expertise: string[];
  imageUrl?: string;
}

export interface Advisor {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  bio: string;
  imageUrl?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  posted: Date;
}