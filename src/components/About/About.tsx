import styles from './styles/About.module.scss';

interface Value {
  icon: string;
  title: string;
  description: string;
}

const VALUES: Value[] = [
  {
    icon: '🎮',
    title: 'Play First',
    description: 'Gameplay is the star. Every design decision starts with how fun and satisfying it feels to play.',
  },
  {
    icon: '✨',
    title: 'No Friction',
    description: 'No account required, no subscriptions, no ads.',
  },
  {
    icon: '🎆',
    title: 'Worth It',
    description: "We only ship what we'd play ourselves. Every game is worth the space on your device.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>About Us</h2>
        <div className={styles.body}>
          <p className={styles.lead}>
            MooreDev Technologies Games is the games label of MooreDev Technologies LLC — a small independent studio
            dedicated to making games that feel good to pick up, satisfying to play, and genuinely worth
            coming back to.
          </p>
          <p>
            We believe the best games respect your time and meet you where you are. Whether you have
            five minutes or five hours, a game should slot naturally into your life rather than
            demanding it. Our games don't require account sign up, subscriptions, and will never ruin the game experience by forcing you to watch ads.
          </p>
          <p>
            We bring the same care and thoughtfulness from our utility apps into every game we make —
            obsessing over the small details that turn a good experience into a great one.
          </p>
        </div>
        <div className={styles.values}>
          {VALUES.map(({ icon, title, description }) => (
            <div key={title} className={styles.valueCard}>
              <span className={styles.valueIcon} aria-hidden="true">
                {icon}
              </span>
              <h3 className={styles.valueTitle}>{title}</h3>
              <p className={styles.valueDesc}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
