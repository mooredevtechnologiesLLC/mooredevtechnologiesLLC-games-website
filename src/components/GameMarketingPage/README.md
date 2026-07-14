# GameMarketingPage Component

A reusable, comprehensive marketing page component for showcasing individual games.

## Features

- **Hero Section**: Title, tagline, description, and download buttons
- **Media Gallery**: Interactive screenshots and video player with thumbnails
- **Feature Grid**: Highlight key game features with icons and descriptions
- **Content Sections**: Flexible markdown-style content blocks
- **System Requirements**: Display technical specifications
- **Keywords/Tags**: SEO-friendly keyword display
- **Support & Resources**: Links to support channels, FAQ, social media
- **Download Links**: Support for iOS, Android, Steam, web, and custom platforms
- **Responsive Design**: Mobile-first, works on all screen sizes
- **Theme Support**: Matches your existing design system

## Quick Start

```tsx
import { GameMarketingPage } from '@/components/GameMarketingPage';
import { GameMarketingData } from '@/components/GameMarketingPage/types';

const gameData: GameMarketingData = {
  name: 'My Awesome Game',
  tagline: 'The tagline that hooks players',
  description: 'A compelling description of your game',
  downloads: [
    {
      platform: 'ios',
      url: 'https://apps.apple.com/app/my-game/id123456789',
    },
  ],
};

export default function MyGamePage() {
  return <GameMarketingPage data={gameData} />;
}
```

## Data Structure

### Required Fields

```typescript
{
  name: string;           // Game title
  tagline: string;        // Short hook/subtitle
  description: string;    // Main description
}
```

### Optional Fields

#### Hero Section
```typescript
{
  heroImage?: string;     // Hero image URL
  heroVideo?: string;     // Hero video URL (autoplay, loop, muted)
  accent?: 'amber' | 'lavender' | 'sage';  // Color theme
}
```

#### Media Gallery
```typescript
{
  media?: [
    {
      type: 'image' | 'video';
      src: string;
      alt?: string;
      thumbnail?: string;   // For video thumbnails
      caption?: string;
    }
  ]
}
```

#### Features
```typescript
{
  features?: [
    {
      icon?: string;        // Emoji or icon
      title: string;
      description: string;
    }
  ]
}
```

#### Content Sections
```typescript
{
  sections?: [
    {
      title: string;
      content: string;      // Supports \n for paragraphs
    }
  ]
}
```

#### Metadata
```typescript
{
  genre?: string;           // "Casual · Puzzle"
  platform?: string;        // "iOS"
  releaseDate?: string;     // "Coming Soon" or date
  keywords?: string[];      // ["puzzle", "casual", ...]
}
```

#### Downloads
```typescript
{
  downloads?: [
    {
      platform: 'ios' | 'android' | 'steam' | 'web' | 'other';
      url: string;
      label?: string;       // Custom label for 'other' platform
    }
  ]
}
```

#### System Requirements
```typescript
{
  systemRequirements?: [
    {
      label: string;        // "Platform"
      value: string;        // "iOS 15.0 or later"
    }
  ]
}
```

#### Support & Resources
```typescript
{
  support?: {
    email?: string;
    website?: string;
    faq?: string;
    discord?: string;
    twitter?: string;
  };
  pressKit?: string;
  privacyPolicy?: string;
}
```

## Usage Examples

### Minimal Game Page
```tsx
const minimalData: GameMarketingData = {
  name: 'Quick Game',
  tagline: 'Simple and fun',
  description: 'A straightforward game description',
  downloads: [
    { platform: 'ios', url: 'https://...' }
  ],
};
```

### Full-Featured Game Page
See [example.tsx](./example.tsx) for a complete example with all features.

## Routing Integration

Add game pages to your React Router:

```tsx
// In App.tsx
import SubmarineGamePage from './components/GameMarketingPage/example';

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/games/submarine" element={<SubmarineGamePage />} />
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
</Routes>
```

## Linking from Game Cards

Update your game cards to link to marketing pages:

```tsx
const GAMES: GameCard[] = [
  {
    name: 'Submarine: Reef Pilot',
    description: '...',
    genre: 'Casual · Puzzle',
    platform: 'iOS',
    accent: 'lavender',
    link: '/games/submarine',  // Link to marketing page
  },
];
```

## Styling Customization

The component uses CSS custom properties from your global theme:
- `--color-bg`, `--color-surface`
- `--color-text`, `--color-text-secondary`
- `--color-primary`, `--color-secondary`, `--color-accent-sage`
- `--color-border`
- `--shadow-md`, `--shadow-lg`, `--shadow-xl`, `--shadow-2xl`
- `--font-mono`

Override specific styles by targeting module classes or extending the SCSS.

## Tips

1. **Images**: Use high-quality screenshots (1920x1080 or similar)
2. **Videos**: Keep under 30MB, use MP4 format, provide thumbnails
3. **Features**: 3-6 features work best visually
4. **Content Sections**: Break up long text into multiple sections
5. **Keywords**: Include 5-10 relevant keywords for SEO
6. **Download Links**: Test all links before deploying

## Accessibility

The component includes:
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Responsive text sizing
- High contrast support
