import styles from './styles/Logo.module.scss';

interface LogoProps {
  size?: number;
  alt?: string;
  className?: string;
}

export default function Logo({ size = 32, alt = 'MooreDev Technologies - Games logo', className }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt={alt}
      width={size}
      height={size}
      className={`${styles.logo}${className ? ` ${className}` : ''}`}
    />
  );
}
