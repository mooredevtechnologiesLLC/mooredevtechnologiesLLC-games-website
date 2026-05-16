import Logo from '../Logo/Logo';
import styles from './styles/Hero.module.scss';

export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero} ${styles.textureDiamond}`}>
      <div className={styles.content}>
        <Logo size={200} className={styles.logoMark} aria-label="MooreDev Technologies - Games logo" />
        <h1 className={styles.title}>MooreDev Technologies - Games</h1>
        <p className={styles.tagline}>Games built with heart and craft.</p>
        <div className={styles.actions}>
          <a href="#games" className={styles.btnPrimary}>
            See Our Games
          </a>
          <a href="#contact" className={styles.btnOutline}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
