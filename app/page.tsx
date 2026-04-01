'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Hero from '@/components/Hero';
import GlobalParticles from '@/components/GlobalParticles';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Capabilities from '@/components/Capabilities';
import Process from '@/components/Process';
import ContactCTA from '@/components/ContactCTA';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Keywords from '@/components/Keywords';
import Mission from '@/components/Mission';
import TechStack from '@/components/TechStack';
import BookingModal from '@/components/BookingModal';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const navLinks = [
  { n: 'Home', h: '#home' },
  { n: 'Projects', h: '#projects' },
  { n: 'Services', h: '#services' },
  { n: 'Pricing', h: '#pricing' },
  { n: 'Testimonials', h: '#testimonials' },
  { n: 'Faqs', h: '#faq' }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ transform: 'translateX(0)', width: 0, opacity: 0 });
  const navContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Re-calculate indicator position
  useEffect(() => {
    const updateIndicator = () => {
      if (navContainerRef.current) {
        const links = navContainerRef.current.querySelectorAll('a');
        const activeLink = links[activeIndex] as HTMLElement;
        const containerRect = navContainerRef.current.getBoundingClientRect();
        
        if (activeLink) {
          const linkRect = activeLink.getBoundingClientRect();
          // Calculate relative position with sub-pixel precision
          const relativeLeft = linkRect.left - containerRect.left + (linkRect.width / 2) - 7;
          
          setIndicatorStyle({
            transform: `translateX(${relativeLeft}px)`,
            width: 14,
            opacity: 1
          });
        }
      }
    };

    updateIndicator();
    const timeoutId = setTimeout(updateIndicator, 100);
    
    window.addEventListener('resize', updateIndicator);
    return () => {
      window.removeEventListener('resize', updateIndicator);
      clearTimeout(timeoutId);
    };
  }, [activeIndex]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (!isScrollingRef.current) {
        const sections = navLinks.map(l => document.getElementById(l.h.replace('#', '')));
        const scrollPos = window.scrollY + window.innerHeight / 3; // Trigger earlier for hero
        
        sections.forEach((section, idx) => {
          if (section) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos <= bottom) {
              setActiveIndex(idx);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, index: number, href: string) => {
    e.preventDefault();
    setActiveIndex(index);
    isScrollingRef.current = true;
    
    const target = document.getElementById(href.replace('#', ''));
    if (target) {
      window.scrollTo({
        top: href === '#home' ? 0 : target.offsetTop - 80,
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  return (
    <main className={styles.main}>
      <GlobalParticles />
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className={styles.logoContainer}>
          <Image 
            src="/logo.png" 
            alt="D Square Logo" 
            width={240} 
            height={64} 
            className={styles.logoImg}
            priority
          />
        </div>
        
        <nav className={styles.nav}>
            <div className={styles.navLinks} ref={navContainerRef}>
              {navLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.h} 
                  data-active={activeIndex === idx}
                  onClick={(e) => handleNavClick(e, idx, link.h)}
                >
                  {link.n}
                </a>
              ))}
              <div 
                className={styles.navIndicator} 
                style={indicatorStyle}
              />
            </div>
        </nav>

        <button className={styles.btnNav} onClick={() => setIsBookingModalOpen(true)}>
          <div className={styles.callIcon}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.88 12.88 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.19-1.32a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          Book a call
        </button>
      </header>
      
      <Hero onBookCall={() => setIsBookingModalOpen(true)} />
      <Mission />
      <TechStack />
      <Projects />
      <Services onBookCall={() => setIsBookingModalOpen(true)} />
      <Capabilities />
      <Process />
      <ContactCTA onBookCall={() => setIsBookingModalOpen(true)} />
      <Pricing onBookCall={() => setIsBookingModalOpen(true)} />
      <Testimonials />
      <FAQ />
      <Keywords />
      <FinalCTA onBookCall={() => setIsBookingModalOpen(true)} />
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </main>
  );
}
