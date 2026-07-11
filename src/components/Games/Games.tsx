import styles from './styles/Games.module.scss';

interface GameCard {
  name: string;
  description: string;
  genre: string;
  platform: string;
  accent: 'amber' | 'lavender' | 'sage';
}

const GAMES: GameCard[] = [
  {
    name: 'Submarine: Reef Pilot',
    description:
      'An underwater submarine side scroller that provides a casual adventure with simple game mechanics and delightful artwork.',
    genre: 'Casual · Puzzle',
    platform: 'iOS',
    accent: 'lavender',
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

function GameCardItem({ name, description, genre, platform, accent }: GameCard) {
  return (
    <article className={`${styles.card} ${styles[`accent-${accent}`]}`}>
      <div className={styles.cardBadge}>In Development</div>
      <h3 className={styles.cardName}>{name}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <div className={styles.cardMeta}>
        <span className={styles.cardGenre}>{genre}</span>
        <span className={styles.cardPlatform}>{platform}</span>
      </div>
    </article>
  );
}
