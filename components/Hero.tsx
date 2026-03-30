'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const supportingRef = useRef<HTMLDivElement>(null);
  const socialProofRef = useRef<HTMLDivElement>(null);
  const visualsRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!contentRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial state setup
    gsap.set([socialProofRef.current, supportingRef.current, headlineRef.current, subheadlineRef.current, ctaRef.current], { 
      y: 60, 
      opacity: 0 
    });
    gsap.set(visualsRef.current, { x: 100, opacity: 0, scale: 0.8 });
    gsap.set(contentRef.current, { opacity: 1 });

    // Entry Sequence
    tl.to(visualsRef.current, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power4.out"
    }, 0.2);

    tl.to([socialProofRef.current, supportingRef.current, headlineRef.current, subheadlineRef.current, ctaRef.current], {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out"
    }, 0.5);

    // Continuous Ring Rotation handled by CSS

    // Dot Glow Pulse
    const orbits = ringsRef.current?.querySelectorAll(`.${styles.orbit}`);
    if (orbits) {
      gsap.to(orbits, {
        boxShadow: "0 0 25px #0066FF, 0 0 45px #0066FF",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });
    }

    // Mouse Parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX - innerWidth / 2) / 80;
      const yPos = (clientY - innerHeight / 2) / 80;
      
      gsap.to(contentRef.current, {
        x: xPos * 0.5,
        y: yPos * 0.5,
        duration: 2,
        ease: "power1.out"
      });

      gsap.to(visualsRef.current, {
        x: -xPos,
        y: -yPos,
        duration: 3,
        ease: "power1.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);

  }, []);

  return (
    <section ref={heroRef} className={styles.hero} id="home">
      <div ref={contentRef} className={styles.content}>
        
        <div ref={socialProofRef} className={styles.socialProof}>
          <div className={styles.avatarStack}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={styles.avatar}>
                <Image 
                  src={`https://i.pravatar.cc/100?img=${i + 15}`} 
                  alt="customer" 
                  width={32} 
                  height={32} 
                />
              </div>
            ))}
          </div>
          <div className={styles.ratingInfo}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className={styles.customerText}>125k+ Customer</span>
          </div>
        </div>

        <div ref={supportingRef} className={styles.supporting}>
          Smart. Fast. Conversion-focused.
        </div>
        
        <h1 ref={headlineRef} className={styles.headline}>
          Smart Web Development<br />
          & Scalable Digital Solutions.
        </h1>
        
        <p ref={subheadlineRef} className={styles.subheadline}>
          More than just a website — we build SEO-optimized, high-performance web solutions that drive growth, visibility, and real customer engagement.
        </p>

        <div ref={ctaRef} className={styles.cta}>
          <button className="btn-primary">
            Get Your Website
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </button>
          <button className="btn-secondary">
            View Demo
          </button>
        </div>
      </div>

      <div ref={visualsRef} className={styles.visuals}>
        <div ref={ringsRef} className={styles.rings}>
          
          {/* Ring 1 (Outer - 4 Icons) */}
          <div className={`${styles.ring} ${styles.ring1}`}>
            <div className={styles.orbitWrapper} style={{ transform: 'rotate(0deg)' }}>
              <div className={styles.orbit}>
                <div className={styles.iconBadge}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12 2L2 19.7778H22L12 2Z"/></svg>
                  <span>Next.js</span>
                </div>
              </div>
            </div>
            <div className={styles.orbitWrapper} style={{ transform: 'rotate(90deg)' }}>
              <div className={styles.orbit}>
                <div className={styles.iconBadge}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#38BDF8"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
                  <span>Tailwind</span>
                </div>
              </div>
            </div>
            <div className={styles.orbitWrapper} style={{ transform: 'rotate(180deg)' }}>
              <div className={styles.orbit}>
                <div className={styles.iconBadge}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#777BB4"><path d="M24 10.5l-9-9-9 9 9 9 9-9zM3 10.5l-3-3 3-3 3 3-3 3z"/></svg>
                  <span>PHP</span>
                </div>
              </div>
            </div>
            <div className={styles.orbitWrapper} style={{ transform: 'rotate(270deg)' }}>
              <div className={styles.orbit}>
                <div className={styles.iconBadge}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#3776AB"><path d="M12.001 2.085c-1.353 0-2.545.123-3.044.271-1.218.361-1.393.97-1.393 2.115v1.272h4.5v.45h-6.75c-1.35 0-1.8.84-1.8 1.74 0 .9.45 1.8 1.8 1.8h2.025v2.25c0 1.144.175 1.754 1.393 2.115 1.218.361 2.812.271 4.165.271s2.545.123 3.044-.271c1.218-.361 1.393-.97 1.393-2.115V9.742h-4.5v-.45h6.75c1.35 0 1.8-.84 1.8-1.74 0-.9-.45-1.8-1.8-1.8h-2.025V3.502c0-1.144-.175-1.754-1.393-2.115-.499-.148-1.691-.302-3.044-.302z"/></svg>
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ring 2 (Middle - 2 Icons) */}
          <div className={`${styles.ring} ${styles.ring2}`}>
            <div className={styles.orbitWrapper} style={{ transform: 'rotate(60deg)' }}>
              <div className={styles.orbit}>
                <div className={styles.iconBadge}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#61DAFB"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="3"/></svg>
                  <span>React</span>
                </div>
              </div>
            </div>
            <div className={styles.orbitWrapper} style={{ transform: 'rotate(240deg)' }}>
              <div className={styles.orbit}>
                <div className={styles.iconBadge}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#339933"><path d="M12 2L4.5 20.29c4.21 2.37 10.79 2.37 15 0L12 2z"/></svg>
                  <span>Node.js</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ring 3 (Inner - 3 Icons) */}
          <div className={`${styles.ring} ${styles.ring3}`}>
            <div className={styles.orbitWrapper} style={{ transform: 'rotate(30deg)' }}>
              <div className={styles.orbit}>
                <div className={styles.iconBadge}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#3178C6"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z"/><path d="M22.034 18.276c.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.997-.585-.437 0-1.225.111-1.15.54.041.246.544.385 1.093.585.549.2 1.344.423 1.344.975s-.551 1.02-1.636 1.047c-1.103.027-1.841-.336-2.115-.992l-1.319.684c.385 1.155 1.485 1.832 3.42 1.832 2.1-.014 3.15-.989 3.361-2.213zm-10.977-2.031l.012-.007c0-3.064 0-5.877-.012-7.854h-1.483c.012.391.012 1.05.012 1.468-.863-1.026-1.921-1.623-3.15-1.623-2.316 0-4.464 2.148-4.464 5.922 0 3.774 2.148 5.922 4.464 5.922 1.229 0 2.287-.597 3.15-1.623v1.782h1.471zm-4.606 2.502c-1.581 0-2.909-1.342-2.909-4.39s1.328-4.39 2.909-4.39 2.909 1.342 2.909 4.39-1.328 4.39-2.909 4.39z"/></svg>
                  <span>TS</span>
                </div>
              </div>
            </div>
            <div className={styles.orbitWrapper} style={{ transform: 'rotate(150deg)' }}>
              <div className={styles.orbit}>
                <div className={styles.iconBadge}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#00599C"><path d="M12 2L2 19.7778H22L12 2Z"/></svg>
                  <span>C++</span>
                </div>
              </div>
            </div>
            <div className={styles.orbitWrapper} style={{ transform: 'rotate(270deg)' }}>
              <div className={styles.orbit}>
                <div className={styles.iconBadge}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="#F05138"><path d="M12 2L2 19.7778H22L12 2Z"/></svg>
                  <span>Swift</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
