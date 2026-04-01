import React from 'react';
import Image from 'next/image';
import styles from './FinalCTA.module.css';

interface FinalCTAProps {
  onBookCall?: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onBookCall }) => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready for a Website That Converts?</h2>
          <p className={styles.subtitle}>
            Let's build your project together — professional & hassle-free
          </p>
          <button className={styles.ctaButton} onClick={onBookCall}>
            Schedule Your Free Consultation
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.abstractShape}></div>
          <Image 
            src="/ct-pr.png" 
            alt="Business professional with laptop" 
            width={600} 
            height={600} 
            className={styles.personImg}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
