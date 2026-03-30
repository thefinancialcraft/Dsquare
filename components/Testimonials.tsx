'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const REVIEWS = [
  {
    id: 1,
    name: "Eleanor Pene",
    role: "Marketing Director",
    text: "Working with Dsquare was an absolute game-changer. They completely transformed our digital presence. The new platform is not only beautiful but incredibly fast and scalable. Our engagement rates have doubled since launch.",
    avatar: "https://i.pravatar.cc/150?img=32",
    pos: { top: '20%', left: '15%' }
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Founder, TechFlow",
    text: "The technical expertise at Dsquare is unmatched. They understood our complex requirements immediately and delivered a flawless web application. Their glassmorphism design approach gave us the premium look we wanted.",
    avatar: "https://i.pravatar.cc/150?img=11",
    pos: { top: '65%', left: '10%' }
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "CEO, Stellar Logistics",
    text: "A truly strategic partner. They didn't just build a website; they built a comprehensive dashboard that streamlined our entire workflow. The level of detail and polish is phenomenal.",
    avatar: "https://i.pravatar.cc/150?img=44",
    pos: { top: '80%', left: '25%' }
  },
  {
    id: 4,
    name: "David Smith",
    role: "E-commerce Manager",
    text: "Our online sales skyrocketed after Dsquare redesigned our storefront. The clean code, fast load times, and perfect mobile responsiveness made all the difference. Highest recommendation from our team.",
    avatar: "https://i.pravatar.cc/150?img=60",
    pos: { top: '75%', right: '15%' }
  },
  {
    id: 5,
    name: "Amelia Taylor",
    role: "Product Owner",
    text: "From concept to deployment, their process is seamless. They take complex problems and turn them into elegant, easy-to-use solutions. The ongoing support has also been exceptional.",
    avatar: "https://i.pravatar.cc/150?img=9",
    pos: { top: '30%', right: '20%' }
  }
];

const REVIEW_CARDS = [
  {
    id: 1,
    name: "Elena Matsuura",
    role: "Finance Lead @ Zentrican",
    text: "When working with logra we had a great pleasure, her ideas were amazing",
    avatar: "https://i.pravatar.cc/150?img=32",
    featured: false
  },
  {
    id: 2,
    name: "Elena Matsuura",
    role: "Finance Lead @ Zentrican",
    text: "What impressed me most was her ability to think beyond code. She was deeply involved in UX decisions and helped us identify user pain points we hadn't noticed before. Post-launch, our support tickets dropped",
    avatar: "https://i.pravatar.cc/150?img=32",
    featured: true,
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" // Using Google logo as placeholder for the branding in the image
  },
  {
    id: 3,
    name: "Elena Matsuura",
    role: "Finance Lead @ Zentrican",
    text: "When working with logra we had a great pleasure, her ideas were amazing",
    avatar: "https://i.pravatar.cc/150?img=32",
    featured: false
  },
  {
    id: 4,
    name: "Elena Matsuura",
    role: "Finance Lead @ Zentrican",
    text: "When working with logra we had a great pleasure, her ideas were amazing",
    avatar: "https://i.pravatar.cc/150?img=32",
    featured: false
  },
  {
    id: 5,
    name: "Elena Matsuura",
    role: "Finance Lead @ Zentrican",
    text: "When working with logra we had a great pleasure, her ideas were amazing",
    avatar: "https://i.pravatar.cc/150?img=32",
    featured: false
  },
  {
    id: 6,
    name: "Elena Matsuura",
    role: "Finance Lead @ Zentrican",
    text: "When working with logra we had a great pleasure, her ideas were amazing",
    avatar: "https://i.pravatar.cc/150?img=32",
    featured: false
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(false);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleIndexChange((activeIndex + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleIndexChange = (newIndex: number) => {
    setAnimateSlide(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setAnimateSlide(false);
    }, 300); // Wait for fade out
  };

  const activeReview = REVIEWS[activeIndex];

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 19.7778H22L12 2Z"/>
            </svg>
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>Real stories from businesses we've transformed through digital excellence.</p>
        </div>

        <div className={styles.contentArea}>
          <div className={styles.orbits}>
            <div className={styles.ring1}></div>
            <div className={styles.ring2}></div>
            <div className={styles.ring3}></div>

            {/* Glowing Dots scattered randomly */}
            <div className={styles.glowDot} style={{ top: '20%', left: '30%', background: '#38BDF8' }} />
            <div className={styles.glowDot} style={{ top: '60%', right: '35%', background: '#A5B4FC' }} />
            <div className={styles.glowDot} style={{ bottom: '15%', left: '40%', background: '#0066FF' }} />
            <div className={styles.glowDot} style={{ top: '40%', right: '10%', background: '#38BDF8' }} />
          </div>

          {/* Floating Avatars continuously orbiting */}
          {REVIEWS.map((review, idx) => {
            if (idx === activeIndex) return null;
            
            // Assign varying orbital parameters based on index
            const radii = ['325px', '450px', '600px', '450px', '325px'];
            const durations = ['30s', '40s', '50s', '45s', '35s'];
            const delays = ['-5s', '-18s', '-30s', '-4s', '-22s'];

            const styleVars = {
              '--radius': radii[idx],
              '--duration': durations[idx],
              '--delay': delays[idx],
            } as React.CSSProperties;

            return (
              <div key={review.id} className={styles.orbitWrapper} style={styleVars}>
                <div className={styles.orbitSpinner}>
                  <div 
                    className={styles.floatingAvatar} 
                    onClick={() => handleIndexChange(idx)}
                  >
                    <Image src={review.avatar} alt={review.name} width={50} height={50} className={styles.smallImg} />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Center Card */}
          <div className={styles.cardWrapper}>
            <div className={styles.cardBackdrop}></div>
            <div className={`${styles.mainCard} ${animateSlide ? styles.fadeOut : styles.fadeIn}`}>
              
              <div className={styles.activeAvatarWrapper}>
                <div className={styles.activeAvatarRing}>
                  <Image src={activeReview.avatar} alt={activeReview.name} width={80} height={80} className={styles.activeImg} />
                </div>
              </div>

              <div className={styles.quoteIcon}>"</div>
              
              <p className={styles.reviewText}>
                {activeReview.text}
              </p>

              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{activeReview.name}</h4>
                <p className={styles.authorRole}>{activeReview.role}</p>
              </div>

            </div>
          </div>
        </div>

        {/* New Review Grid Section below Orbit */}
        <div className={styles.reviewGrid}>
          {REVIEW_CARDS.map((card) => (
            <div key={card.id} className={`${styles.reviewCard} ${card.featured ? styles.featuredCard : ''}`}>
              <div className={styles.cardContent}>
                <p className={styles.cardText}>{card.text}</p>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.footerLeft}>
                  <div className={styles.cardAvatar}>
                    <Image src={card.avatar} alt={card.name} width={40} height={40} />
                  </div>
                  <div className={styles.cardMeta}>
                    <h5 className={styles.cardAuthor}>{card.name}</h5>
                    <p className={styles.cardRole}>{card.role}</p>
                  </div>
                </div>
                {card.featured && card.logo && (
                  <div className={styles.cardLogo}>
                    <Image src={card.logo} alt="Company Logo" width={60} height={20} className={styles.companyLogo} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

