export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  thumbnail?: string; // For videos
  caption?: string;
}

export interface Feature {
  icon?: string;
  title: string;
  description: string;
}

export interface DownloadLink {
  platform: 'ios' | 'android' | 'steam' | 'web' | 'other';
  url: string;
  label?: string;
}

export interface SystemRequirement {
  label: string;
  value: string;
}

export interface SupportInfo {
  email?: string;
  website?: string;
  faq?: string;
  discord?: string;
  twitter?: string;
}

export interface GameMarketingData {
  // Hero Section
  name: string;
  tagline: string;
  description: string;
  heroImage?: string;
  heroVideo?: string;
  accent?: 'amber' | 'lavender' | 'sage';

  // Media Gallery
  media?: MediaItem[];

  // Features
  features?: Feature[];

  // Detailed Sections
  sections?: {
    title: string;
    content: string;
  }[];

  // Metadata
  genre?: string;
  platform?: string;
  releaseDate?: string;
  keywords?: string[];

  // Downloads
  downloads?: DownloadLink[];

  // System Requirements
  systemRequirements?: SystemRequirement[];

  // Support
  support?: SupportInfo;

  // Additional
  pressKit?: string;
  privacyPolicy?: string;
}
