import { Link, useLocation } from 'react-router-dom';
import styles from './styles/Footer.module.scss';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>
          &copy; {CURRENT_YEAR} MooreDev Technologies LLC. All rights reserved.
        </span>
        <nav className={styles.nav} aria-label="Footer navigation">
          {isHomePage ? (
            <>
              <a href="#about" className={styles.link}>About</a>
              <a href="#games" className={styles.link}>Games</a>
              <a href="#contact" className={styles.link}>Contact</a>
            </>
          ) : (
            <Link to="/" className={styles.link}>Home</Link>
          )}
          <Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
