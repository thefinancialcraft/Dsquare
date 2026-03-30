'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        {/* Cutout Image Part */}
        <div className={styles.personCutout}>
          <Image 
            src="/cta_cutout.png" 
            alt="Expert Consultant" 
            width={450} 
            height={450} 
            priority
            className={styles.cutoutImg}
          />
        </div>

        {/* Description Part */}
        <div className={styles.ctaInfo}>
          <h3 className={styles.ctaTitle}>Need more help?</h3>
          <p className={styles.ctaDesc}>
            Find the right digital strategist for your business needs and book a call in seconds. 
            Scale your vision with expert technical guidance.
          </p>
        </div>

        {/* Button Part */}
        <div className={styles.ctaActions}>
          <button className={styles.bookBtn}>
            Book a Call
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
