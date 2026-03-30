'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: "Rynxly",
    category: "SAAS SOLUTION",
    image: "/rynxly2.png",
  },
  {
    title: "OTP Finder",
    category: "Automation",
    image: "/otp.jfif",
  },
  {
    title: "The financial craft",
    category: "Insurance",
    image: "/tfc1.png",
  },
  {
    title: "Growwik Media",
    category: "Digital Marketing",
    image: "/grwk.png",
  },
  {
    title: "Hospital Management System",
    category: "HealthCare",
    image: "/hospital.png"},
  {
    title: "Titan FinTech",
    category: "PRODUCT DESIGN",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Signy",
    category: "SAAS SOLUTION",
    image: "/signy.png",
  },
  {
    title: "Stellar Logistics",
    category: "SUPPLY CHAIN",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  }
];

const GRID_PROJECTS = [
  {
    title: "Rynxly CRM",
    category: "Smart Sales",
    desc: "A SIM-based smart calling CRM for mobile teams to automate logs and scale sales.",
    image: "/rynxly2.png",
  },
  {
    title: "OTP Finder",
    category: "Email Automation",
    desc: "An intelligent email OTP extractor system that streamlines verification processes across multiple accounts.",
    image: "/otp.jfif",
  },
  {
    title: "The Financial Craft",
    category: "Insurance Sales",
    desc: "The Financial Craft helps you protect and grow your finances with smart solutions",
     image: "/tfc1.png",  },
  {
    title: "Signy",
    category: "Saas Product",
    desc: "Signy is a comprehensive platform for managing and tracking contracts and agreements.",
    image: "/signy.png"
  },
  {
    title: "Growwik",
    category: "Digital Marketing",
    desc: "Growwik is a comprehensive platform for managing and tracking contracts and agreements.",
   image: "/grwk.png",  },
  {
    title: "Hospital Management System",
    category: "HealthCare",
    desc: "Hospital Management System is a comprehensive platform for managing and tracking contracts and agreements.",
    image: "/hospital.png"
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [key, setKey] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    setKey(prev => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    setKey(prev => prev + 1);
  }, []);

  // Auto-Slide Logic
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getStyles = (index: number) => {
    let diff = index - activeIndex;
    if (diff > PROJECTS.length / 2) diff -= PROJECTS.length;
    if (diff < -PROJECTS.length / 2) diff += PROJECTS.length;
    const absDiff = Math.abs(diff);

    if (absDiff === 0) {
      return { transform: 'translateX(0) scale(1.15) translateZ(100px)', zIndex: 10, opacity: 1, visibility: 'visible' as const };
    }

    const xBase = 200; // Wider spreading
    const xOffset = diff * xBase;
    const scale = Math.max(0.8, 1 - absDiff * 0.15); // Larger back cards
    const zIndex = 14 - absDiff;
    const rotation = diff * -12; // Subtle rotation for wider spread
    const opacity = absDiff > 2 ? 0 : Math.max(0.4, 1 - absDiff * 0.3); // 2 cards each side max
    const visibility = (absDiff > 2 ? 'hidden' : 'visible') as 'hidden' | 'visible';

    return {
      transform: `translateX(${xOffset}px) scale(${scale}) rotateY(${rotation}deg)`,
      zIndex,
      opacity,
      visibility,
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden' as const 
    };
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <div className={styles.badge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 19.7778H22L12 2Z"/>
          </svg>
          <span>OUR WORK IN ACTION</span>
        </div>
        <h2 className={styles.title}>Digital Excellence in Action</h2>
        <p className={styles.subtitle}>
          Explore how <strong>Dsquare</strong> transforms businesses with premium, 
          SEO-compatible, and high-performance digital projects. From custom CRM 
          to insurance portals, our work drives real results.
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContainer}>
          <div className={styles.slider}>
            {PROJECTS.map((project, index) => {
              const isActive = index === activeIndex;
              const currentStyles = getStyles(index);

              return (
                <div 
                  key={index} 
                  className={`${styles.card} ${isActive ? styles.active : ''}`}
                  style={currentStyles}
                  onClick={() => {
                    setActiveIndex(index);
                    setKey(prev => prev + 1);
                  }}
                >
                  <div className={styles.cardImage}>
                    <Image 
                      src={project.image} 
                      alt={`${project.title} - Dsquare Project Case Study`}
                      fill
                      priority={isActive}
                      className={styles.img}
                    />
                    {isActive && (
                      <div key={key} className={styles.loadingShimmer} />
                    )}
                    <div className={styles.overlay}>
                      <div className={styles.arrowCircle}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.pill}>
                      <span className={styles.category}>{project.category}</span>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.indicators}>
          {PROJECTS.map((_, idx) => (
            <div 
              key={idx} 
              className={`${styles.indicatorDot} ${idx === activeIndex ? styles.activeDot : ''}`}
              onClick={() => {
                setActiveIndex(idx);
                setKey(prev => prev + 1);
              }}
            >
              {idx === activeIndex && (
                <div key={key} className={styles.dotProgressBar} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* NEW: Project Grid Below Carousel */}
      <div className={styles.gridSection}>
        <div className={styles.projectGrid}>
          {GRID_PROJECTS.map((project, idx) => (
            <div key={idx} className={styles.gridCard}>
              <div className={styles.gridImageContainer}>
                <Image 
                  src={project.image} 
                  alt={`${project.title} Showcase`}
                  fill
                  priority={false}
                  className={styles.gridImg}
                />
              </div>
              <div className={styles.gridFloatingContent}>
                <div className={styles.gridCategoryPill}>{project.category}</div>
                <h3 className={styles.gridProjectTitle}>{project.title}</h3>
                <p className={styles.gridDesc}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
