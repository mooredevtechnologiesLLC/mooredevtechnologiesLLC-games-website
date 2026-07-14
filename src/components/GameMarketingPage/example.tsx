import { GameMarketingPage } from './';
import type { GameMarketingData } from './types';

// Example usage for Submarine: Reef Pilot
const submarineGameData: GameMarketingData = {
  // Hero Section
  name: 'Submarine: Reef Pilot',
  tagline: 'Navigate the depths in this charming underwater adventure',
  description:
    'Guide your submarine through vibrant coral reefs, discover hidden treasures, and encounter delightful sea creatures in this relaxing casual game.',
  heroImage: '/assets/submarine/hero.png',
  accent: 'lavender',

  // Media Gallery
  media: [
    {
      type: 'image',
      src: '/assets/submarine/screenshot1.png',
      alt: 'Submarine navigating through colorful coral reef',
      caption: 'Explore stunning underwater environments',
    },
    {
      type: 'image',
      src: '/assets/submarine/screenshot2.png',
      alt: 'Collecting treasures underwater',
      caption: 'Collect treasures and unlock new areas',
    },
    {
      type: 'video',
      src: '/assets/submarine/gameplay.mp4',
      thumbnail: '/assets/submarine/gameplay-thumb.png',
      caption: 'Relaxing gameplay perfect for any moment',
    },
  ],

  // Features
  features: [
    {
      icon: '🎨',
      title: 'Beautiful Hand-Drawn Art',
      description:
        'Every frame is a work of art with lovingly crafted underwater scenes and charming character designs.',
    },
    {
      icon: '🎮',
      title: 'Simple Controls',
      description:
        'Easy to pick up, impossible to put down. Perfect for players of all ages and skill levels.',
    },
    {
      icon: '🌊',
      title: 'Multiple Reef Environments',
      description:
        'Explore different underwater biomes, each with unique challenges and discoveries.',
    },
    {
      icon: '🎵',
      title: 'Relaxing Soundtrack',
      description:
        'Immerse yourself in soothing ocean sounds and gentle melodies.',
    },
    {
      icon: '🏆',
      title: 'Achievements & Collectibles',
      description:
        'Discover hidden treasures and unlock special rewards as you explore.',
    },
    {
      icon: '📱',
      title: 'Play Anywhere',
      description:
        'Designed for mobile with offline play support. Perfect for commutes or downtime.',
    },
  ],

  // Detailed Sections
  sections: [
    {
      title: 'About the Game',
      content: `Submarine: Reef Pilot is a charming underwater adventure that combines simple side-scrolling mechanics with beautifully crafted environments.

Navigate your submarine through vibrant coral reefs, avoiding obstacles and collecting treasures as you go. Each level presents new challenges and discoveries, but never overwhelming difficulty.

Whether you have five minutes or an hour, Submarine: Reef Pilot offers the perfect casual gaming experience. No timers, no pressure—just you and the peaceful ocean depths.`,
    },
    {
      title: 'Perfect For',
      content: `• Casual gamers looking for a relaxing experience
• Commuters wanting a quick gaming session
• Anyone who loves ocean themes and charming art
• Players seeking games without pressure or time limits
• Fans of side-scrolling adventures with a twist`,
    },
  ],

  // Metadata
  genre: 'Casual · Adventure',
  platform: 'iOS',
  releaseDate: 'Coming Soon',
  keywords: [
    'submarine',
    'underwater',
    'casual',
    'puzzle',
    'relaxing',
    'side-scroller',
    'ocean',
    'reef',
    'adventure',
  ],

  // Downloads
  downloads: [
    {
      platform: 'ios',
      url: 'https://apps.apple.com/app/submarine-reef-pilot/id123456789',
      label: 'Download on the App Store',
    },
  ],

  // System Requirements
  systemRequirements: [
    {
      label: 'Platform',
      value: 'iOS 15.0 or later',
    },
    {
      label: 'Device',
      value: 'iPhone, iPad, iPod touch',
    },
    {
      label: 'Storage',
      value: '150 MB available space',
    },
    {
      label: 'Internet',
      value: 'Not required (offline play supported)',
    },
  ],

  // Support
  support: {
    email: 'support@mooredevtech.com',
    website: 'https://mooredevtech.com',
    faq: 'https://mooredevtech.com/submarine/faq',
  },

  // Additional
  privacyPolicy: '/privacy-policy',
};

// Example component usage in a route
export default function SubmarineGamePage() {
  return <GameMarketingPage data={submarineGameData} />;
}

// You can also create a minimal version for a simpler game page
const minimalGameData: GameMarketingData = {
  name: 'My Simple Game',
  tagline: 'A fun puzzle adventure',
  description: 'Solve puzzles and have fun!',
  genre: 'Puzzle',
  platform: 'iOS',
  downloads: [
    {
      platform: 'ios',
      url: 'https://apps.apple.com/app/my-game/id123456789',
    },
  ],
};

export function MinimalGamePage() {
  return <GameMarketingPage data={minimalGameData} />;
}
