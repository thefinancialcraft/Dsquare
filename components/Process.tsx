'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Process.module.css';

const STEPS = [
  {
    num: "1",
    title: "Concept Development",
    desc: "Strategy & analysis for your project"
  },
  {
    num: "2",
    title: "Content Creation",
    desc: "Copywriting, images & SEO optimization"
  },
  {
    num: "3",
    title: "Design",
    desc: "Custom layouts & user experience"
  },
  {
    num: "4",
    title: "Implementation",
    desc: "Technical development & performance tuning"
  },
  {
    num: "5",
    title: "Go Live!",
    desc: "Launch & ongoing support"
  }
];

const Process = () => {
  return (
    <section className={styles.processSection} id="process">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 19.7778H22L12 2Z"/>
            </svg>
            <span>SOLUTIONS THAT DRIVE SUCCESS</span>
          </div>
          <h2 className={styles.title}>
            Strategic workflow For Digital Excellence
          </h2>
          <p className={styles.subtitle}>Our step-by-step approach to delivering high-performance results.</p>
        </div>

        <div className={styles.content}>
          <div className={styles.leftVisual}>
            <div className={styles.imageSliderContainer}>
              <div className={styles.imageTrack}>
                {/* Images for the slide */}
                <div className={styles.slideCard}>
                  <Image src="/images/developer_meeting_client.png" alt="Process 1" fill className={styles.personImg} />
                </div>
                <div className={styles.slideCard}>
                  <Image src="/project1.png" alt="Process 2" fill className={styles.personImg} />
                </div>
                <div className={styles.slideCard}>
                  <Image src="/project2.png" alt="Process 3" fill className={styles.personImg} />
                </div>
                {/* Clone for loop */}
                <div className={styles.slideCard}>
                  <Image src="/images/developer_meeting_client.png" alt="Process 1" fill className={styles.personImg} />
                </div>
              </div>
              
              <div className={styles.overlayGraphic}>
                <svg width="400" height="400" viewBox="0 0 400 400">
                  <path 
                    d="M100 300 L300 100 M300 100 L220 100 M300 100 L300 180" 
                    fill="none" 
                    stroke="rgba(56, 189, 248, 0.4)" 
                    strokeWidth="40" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.rightInfo}>
            {STEPS.map((step, idx) => (
              <div key={idx} className={styles.stepRow}>
                <div className={styles.numberCol}>
                  <div className={styles.circle}>{step.num}</div>
                  {idx !== STEPS.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.textCol}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
