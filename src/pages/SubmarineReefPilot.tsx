import { GameMarketingPage } from '../components/GameMarketingPage';
import type { GameMarketingData } from '../components/GameMarketingPage/types';
import { SUPPORT_EMAIL, SUPPORT_WEBSITE } from '../constants';

const submarineGameData: GameMarketingData = {
  // Hero Section
  name: 'Submarine: Reef Pilot',
  tagline: 'Easy to pick up, hard to master',
  description:
    'Dive into the depths with this action-packed endless submarine game! Steer your sub through beautiful underwater landscapes while dodging torpedoes, mines, and depth charges. How long can you survive?',
  accent: 'lavender',
  // Metadata
  genre: 'Action · Endless Runner',
  platform: 'iOS',
  releaseDate: 'Friday, 7/24/2026',

   media: [
    {
      type: 'video',
      src: '/assets/submarine-reef-pilot/gameplay.mp4',
      thumbnail: '/assets/submarine-reef-pilot/gameplay-thumb.png',
      caption: 'Dodge torpedoes and collect coins',
    },
    {
      type: 'image',
      src: '/assets/submarine-reef-pilot/home-screen.PNG',
      alt: 'Submarine: Reef Pilot Home Screen with submarine and UI buttons',
      caption: 'Torpedo dodging side scroller',
    },
    {
      type: 'image',
      src: '/assets/submarine-reef-pilot/2xscore.PNG',
      alt: 'Collecting treasures and powerups underwater',
      caption: 'Collect treasures and powerups',
    },
    {
      type: 'image',
      src: '/assets/submarine-reef-pilot/explosion.PNG',
      alt: 'Dodge hazards or risk explosions',
      caption: 'Dodge hazards or risk explosions',
    },
    {
      type: 'image',
      src: '/assets/submarine-reef-pilot/coins.PNG',
      alt: 'Collect coins to earn points',
      caption: 'Collect coins to earn points',
    },
    {
      type: 'image',
      src: '/assets/submarine-reef-pilot/02-shop.png',
      alt: 'Game shop UI for buying subs with coins',
      caption: 'Use your coins to buy submarines',
    },
    {
      type: 'image',
      src: '/assets/submarine-reef-pilot/03-scores.PNG',
      alt: 'Game leaderboard UI showing options for Top Runs and All-time boards',
      caption: 'Compete in global leaderboards',
    },
  ],

  // Features
  features: [
    {
      icon: '🎮',
      title: 'Simple Controls, Deep Strategy',
      description:
        'Touch and drag to steer your submarine up and down. Easy to learn, challenging to master. Perfect for quick gaming sessions or extended runs.',
    },
    {
      icon: '🚢',
      title: '12 Unique Submarines',
      description:
        'Unlock submarines across three size classes: nimble small subs (1 hit per life), balanced medium hulls (2 hits per life), or tank-like large submarines (3 hits per life).',
    },
    {
      icon: '⚡',
      title: 'Powerful Pickups',
      description:
        'Collect power-ups to gain the edge: Shield, Coin Magnet, Auto-Fire, 2× Score, and Bonus Life. Turn the tide in your favor!',
    },
    {
      icon: '🏆',
      title: 'Global Competition',
      description:
        'Compete on two leaderboards: Best Single Run and All-Time Distance. Game Center integration lets you challenge friends and climb the ranks worldwide.',
    },
    {
      icon: '🌊',
      title: 'Beautiful Underwater World',
      description:
        'Parallax scrolling mountain ranges and seabed with randomized, colorful landscapes. Discover sunken wrecks as you explore the depths.',
    },
    {
      icon: '✨',
      title: 'Premium Experience',
      description:
        'No ads, pure gameplay. iCloud sync keeps your progress across devices. Full offline play. Haptic feedback and dynamic music create a polished experience.',
    },
  ],

  // Detailed Sections
  sections: [
    {
      title: 'About the Game',
      content: `Submarine: Reef Pilot is an action-packed endless submarine game that combines simple controls with deep strategic gameplay.

You start each run with three lives. Every hit counts—face increasingly difficult hazards as you progress, but earn brief invincibility after each hit to recover and reposition. Lost your last life? Spend coins to continue right where you left off with all three lives restored!

Whether you're chasing the top of the leaderboard or just killing time between meetings, every run is a fresh challenge with randomized hazards and procedural landscapes.`,
    },
    {
      title: 'Submarine Classes',
      content: `Choose from 12 unique submarines across three size classes, each with different characteristics:

• Small Subs — Lightning-fast and agile, perfect for dodging through tight spaces. Fragile construction means only 1 hit per life.

• Medium Hulls — Balanced speed and durability offering the best of both worlds. Can take 2 hits per life.

• Large Submarines — Slow but mighty tanks that can absorb punishment. Withstand 3 hits per life.

Pick the hull that matches your play style! All submarines are unlockable through gameplay by collecting coins.`,
    },
    {
      title: 'Power-Ups & Pickups',
      content: `Collect glowing power-ups to turn the tide in your favor:

• Shield — Pass through hazards unharmed
• Coin Magnet — Pull in coins from across the screen
• Auto-Fire — Blast hazards out of your way
• 2x Score — Double your distance points
• Bonus Life — Restore lost lives (when below max)

Plus, gather coins to rack up points and discover rare treasure chests on the ocean floor. Spend your coins in the shop to unlock new submarines!`,
    },
    {
      title: 'Compete & Progress',
      content: `Track your performance on two global leaderboards:

• Best Single Run — Your longest single journey
• All-Time Distance — Cumulative distance across all runs

• Game Center integration lets you compete globally, while local tracking keeps your personal top 10 runs. Challenge friends, climb the ranks, and prove your skill!

• iCloud sync keeps your progress, submarines, and achievements across all your devices.`,
    },
    {
      title: 'Perfect For',
      content: `• Casual gamers looking for quick, satisfying action

• Competitive players chasing leaderboard rankings

• Commuters wanting engaging gameplay during breaks

• Anyone who loves ocean themes and colorful artwork

• Fans of endless runners and side-scrolling adventures

• Players who appreciate polished, ad-free experiences`,
    },
  ],

  // Keywords
  keywords: [
    'submarine',
    'underwater',
    'endless runner',
    'action',
    'dodge',
    'torpedoes',
    'mines',
    'power-ups',
    'leaderboards',
    'Game Center',
    'no ads',
    'offline',
    'iCloud',
    'casual',
    'challenging',
  ],

  // Downloads
  downloads: [
    {
      platform: 'ios',
      url: 'https://apps.apple.com/us/app/submarine-reef-pilot/id6789714045',
    },
  ],

  // System Requirements
  systemRequirements: [
    {
      label: 'Platform',
      value: 'iOS 17.6 or later',
    },
    {
      label: 'Device',
      value: 'iPhone, iPad',
    }
  ],

  // Support
  support: {
    email: SUPPORT_EMAIL,
    website: SUPPORT_WEBSITE,
  },

  // Additional
  privacyPolicy: '/privacy-policy',
};

export default function SubmarineReefPilotPage() {
  return <GameMarketingPage data={submarineGameData} />;
}
