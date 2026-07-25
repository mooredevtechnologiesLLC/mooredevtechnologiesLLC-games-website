import { Link } from 'react-router-dom';
import styles from './styles/Games.module.scss';

interface GameCard {
  name: string;
  description: string;
  genre: string;
  platform: string;
  accent: 'amber' | 'lavender' | 'sage';
  link?: string;
  appStoreLink?: string;
}

const GAMES: GameCard[] = [
  {
    name: 'Submarine: Reef Pilot',
    description:
      'An underwater submarine side scroller that provides a casual adventure with simple game mechanics and delightful artwork.',
    genre: 'Casual · Puzzle',
    platform: 'iOS',
    accent: 'lavender',
    link: '/games/submarine-reef-pilot',
    appStoreLink: 'https://apps.apple.com/us/app/submarine-reef-pilot/id6789714045'
  },
  {
    name: 'Coming Soon',
    description:
      'Our first puzzle game is in development — a casual puzzle experience designed to be picked up for a few minutes or a few hours, with no pressure and plenty of charm.',
    genre: 'Casual · Puzzle',
    platform: 'iOS',
    accent: 'lavender',
  },
];

export default function Games() {
  return (
    <section id="games" className={styles.games}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Our Games</h2>
        <p className={styles.subtitle}>
          Thoughtfully crafted games for every kind of player.
        </p>
        <div className={styles.grid}>
          {GAMES.map((game) => (
            <GameCardItem key={game.name} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppStoreBadge() {
  return (
    <svg
      className={styles.appStoreBadge}
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Download on the App Store"
    >
      <defs>
        <linearGradient id="badge-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
      </defs>
      <rect width="120" height="40" rx="5" fill="url(#badge-gradient)" />
      <path
        d="M24.769 20.3a4.949 4.949 0 012.356-4.15 5.066 5.066 0 00-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 00-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.88 3.58-.88 1.658 0 2.144.88 3.59.851 1.489-.024 2.426-1.331 3.32-2.669a10.96 10.96 0 001.518-3.092 4.79 4.79 0 01-2.918-4.406zM22.037 12.21a4.872 4.872 0 001.115-3.49 4.957 4.957 0 00-3.208 1.66A4.636 4.636 0 0018.73 13.8a4.1 4.1 0 003.307-1.59z"
        fill="#fff"
      />
      <text
        x="38"
        y="15.5"
        fontFamily="SF Pro Text, -apple-system, system-ui, sans-serif"
        fontSize="9"
        fill="#fff"
      >
        Download on the
      </text>
      <text
        x="38"
        y="28"
        fontFamily="SF Pro Display, -apple-system, system-ui, sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#fff"
      >
        App Store
      </text>
    </svg>
  );
}

function GameCardItem({ name, description, genre, platform, accent, link, appStoreLink }: GameCard) {
  const content = (
    <>
      <div className={styles.cardBadge}>In Development</div>
      <h3 className={styles.cardName}>{name}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <div className={styles.cardMeta}>
        <span className={styles.cardGenre}>{genre}</span>
        <span className={styles.cardPlatform}>{platform}</span>
      </div>
      {appStoreLink && (
        <a
          href={appStoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.appStoreWrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <AppStoreBadge />
        </a>
      )}
    </>
  );

  if (link) {
    // Internal link - use React Router Link
    if (link.startsWith('/')) {
      return (
        <Link
          to={link}
          className={`${styles.card} ${styles[`accent-${accent}`]} ${styles.cardLink}`}
        >
          {content}
        </Link>
      );
    }
    // External link - use regular anchor
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.card} ${styles[`accent-${accent}`]} ${styles.cardLink}`}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={`${styles.card} ${styles[`accent-${accent}`]}`}>
      {content}
    </article>
  );
}
