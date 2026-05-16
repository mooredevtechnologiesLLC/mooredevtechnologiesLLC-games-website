import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import styles from './styles/Header.module.scss';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Games', href: '#games' },
  { label: 'Contact', href: '#contact' },
];

const SCROLL_THRESHOLD = 20;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logoLink} aria-label="MooreDev Technologies Games — back to top">
          <Logo size={28} aria-hidden="true" />
          <span className={styles.wordmark}>MooreDev Technologies - Games</span>
        </a>
        <nav className={styles.nav} aria-label="Site navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={styles.navLink}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
