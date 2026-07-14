import { useState } from 'react';
import type { GameMarketingData } from './types';
import styles from './styles/GameMarketingPage.module.scss';

interface GameMarketingPageProps {
  data: GameMarketingData;
}

export default function GameMarketingPage({ data }: GameMarketingPageProps) {
  const {
    name,
    tagline,
    description,
    heroImage,
    heroVideo,
    accent = 'lavender',
    media = [],
    features = [],
    sections = [],
    genre,
    platform,
    releaseDate,
    keywords = [],
    downloads = [],
    systemRequirements = [],
    support,
    pressKit,
    privacyPolicy,
  } = data;

  // Determine which media to show in hero and which in gallery
  const hasPrimaryMedia = heroImage || heroVideo || (media.length > 0);
  const shouldShowFirstMediaInHero = !heroImage && !heroVideo && media.length > 0;
  const galleryMedia = shouldShowFirstMediaInHero ? media.slice(1) : media;

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${styles[`accent-${accent}`]}`}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>{name}</h1>
            {tagline && <p className={styles.tagline}>{tagline}</p>}
            {description && <p className={styles.description}>{description}</p>}

            <div className={styles.metadata}>
              {genre && <span className={styles.genre}>{genre}</span>}
              {platform && <span className={styles.platform}>{platform}</span>}
              {releaseDate && <span className={styles.releaseDate}>{releaseDate}</span>}
            </div>

            {downloads.length > 0 && (
              <div className={styles.downloadButtons}>
                {downloads.map((download, idx) => (
                  <DownloadButton key={idx} {...download} />
                ))}
              </div>
            )}
          </div>

          {hasPrimaryMedia && (
            <div className={styles.heroMedia}>
              {heroVideo ? (
                <video
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.heroVideo}
                />
              ) : heroImage ? (
                <img src={heroImage} alt={name} className={styles.heroImage} />
              ) : media[0] && media[0].type === 'video' ? (
                <video
                  src={media[0].src}
                  controls
                  className={styles.heroVideo}
                  poster={media[0].thumbnail}
                />
              ) : media[0] ? (
                <img
                  src={media[0].src}
                  alt={media[0].alt || name}
                  className={styles.heroImage}
                />
              ) : null}
            </div>
          )}
        </div>
      </section>

      {/* Additional Media Gallery */}
      {galleryMedia.length > 0 && (
        <section className={styles.gallery}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>
              {shouldShowFirstMediaInHero ? 'More Screenshots & Videos' : 'Screenshots & Videos'}
            </h2>
            <MediaGallery items={galleryMedia} gameName={name} />
          </div>
        </section>
      )}

      {/* Features */}
      {features.length > 0 && (
        <section className={styles.features}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Features</h2>
            <div className={styles.featureGrid}>
              {features.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Content Sections */}
      {sections.length > 0 && (
        <section className={styles.contentSections}>
          <div className={styles.sectionInner}>
            {sections.map((section, idx) => (
              <div key={idx} className={styles.contentSection}>
                <h2 className={styles.sectionHeading}>{section.title}</h2>
                <div className={styles.contentBody}>
                  {section.content.split('\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* System Requirements */}
      {systemRequirements.length > 0 && (
        <section className={styles.systemReqs}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>System Requirements</h2>
            <dl className={styles.reqsList}>
              {systemRequirements.map((req, idx) => (
                <div key={idx} className={styles.reqItem}>
                  <dt className={styles.reqLabel}>{req.label}</dt>
                  <dd className={styles.reqValue}>{req.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Keywords */}
      {keywords.length > 0 && (
        <section className={styles.keywords}>
          <div className={styles.sectionInner}>
            <h3 className={styles.keywordsHeading}>Tags</h3>
            <div className={styles.keywordList}>
              {keywords.map((keyword, idx) => (
                <span key={idx} className={styles.keyword}>
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Support & Links */}
      {(support || pressKit || privacyPolicy) && (
        <section className={styles.support}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Support & Resources</h2>

            {support && (
              <div className={styles.supportLinks}>
                {support.email && (
                  <a href={`mailto:${support.email}`} className={styles.supportLink}>
                    <span className={styles.linkIcon}>✉️</span>
                    Email Support
                  </a>
                )}
                {support.website && (
                  <a
                    href={support.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.supportLink}
                  >
                    <span className={styles.linkIcon}>🌐</span>
                    Website
                  </a>
                )}
                {support.faq && (
                  <a
                    href={support.faq}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.supportLink}
                  >
                    <span className={styles.linkIcon}>❓</span>
                    FAQ
                  </a>
                )}
                {support.discord && (
                  <a
                    href={support.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.supportLink}
                  >
                    <span className={styles.linkIcon}>💬</span>
                    Discord
                  </a>
                )}
                {support.twitter && (
                  <a
                    href={support.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.supportLink}
                  >
                    <span className={styles.linkIcon}>🐦</span>
                    Twitter
                  </a>
                )}
              </div>
            )}

            {(pressKit || privacyPolicy) && (
              <div className={styles.additionalLinks}>
                {pressKit && (
                  <a
                    href={pressKit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.additionalLink}
                  >
                    Press Kit
                  </a>
                )}
                {privacyPolicy && (
                  <a
                    href={privacyPolicy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.additionalLink}
                  >
                    Privacy Policy
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

// Media Gallery Component
function MediaGallery({ items, gameName }: { items: any[]; gameName: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = items[selectedIndex];

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <div className={styles.mediaGallery} onKeyDown={handleKeyDown} tabIndex={0}>
      <div className={styles.mediaMainWrapper}>
        <div className={styles.mediaMain}>
          {selectedItem.type === 'video' ? (
            <video
              src={selectedItem.src}
              controls
              className={styles.mediaVideo}
              poster={selectedItem.thumbnail}
            />
          ) : (
            <img
              src={selectedItem.src}
              alt={selectedItem.alt || `${gameName} screenshot ${selectedIndex + 1}`}
              className={styles.mediaImage}
            />
          )}
          {selectedItem.caption && (
            <p className={styles.mediaCaption}>{selectedItem.caption}</p>
          )}
        </div>

        {items.length > 1 && (
          <>
            <button
              className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
              onClick={goToPrevious}
              aria-label="Previous media"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
              onClick={goToNext}
              aria-label="Next media"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <div className={styles.carouselIndicator}>
              {selectedIndex + 1} / {items.length}
            </div>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className={styles.mediaThumbnails}>
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`${styles.thumbnail} ${idx === selectedIndex ? styles.thumbnailActive : ''}`}
              aria-label={`View media ${idx + 1}`}
            >
              <img
                src={item.type === 'video' ? item.thumbnail || item.src : item.src}
                alt={item.alt || `Thumbnail ${idx + 1}`}
                className={styles.thumbnailImage}
              />
              {item.type === 'video' && (
                <span className={styles.playIcon}>▶</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }: any) {
  return (
    <div className={styles.featureCard}>
      {icon && <div className={styles.featureIcon}>{icon}</div>}
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

// Download Button Component
function DownloadButton({ platform, url, label }: any) {
  const platformLabels: Record<string, string> = {
    ios: 'Download on the App Store',
    android: 'Get it on Google Play',
    steam: 'Get it on Steam',
    web: 'Play in Browser',
    other: label || 'Download',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.downloadButton} ${styles[`download-${platform}`]}`}
    >
      {platformLabels[platform]}
    </a>
  );
}
