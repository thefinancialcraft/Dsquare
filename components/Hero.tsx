'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './Hero.module.css';
import GlobalParticles from './GlobalParticles';

interface HeroProps {
  onBookCall?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
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
      <GlobalParticles />
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


        <h1 ref={headlineRef} className={styles.headline}>
          Your Shortcut To
          <br />
          <span className={styles.bigText}>A Powerful Website</span>
        </h1>
        
        <p ref={subheadlineRef} className={styles.subheadline}>
          More than just a website — we build SEO-optimized, high-performance web solutions<br />
           that drive growth, visibility, and real customer engagement.
        </p>

        <div ref={ctaRef} className={styles.cta} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', width: '100%' }}>
          <button className="btn-primary" onClick={onBookCall}>
            Get Your Website
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </button>
          <button className="btn-secondary">
            View Demo
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
