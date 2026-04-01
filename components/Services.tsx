'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 's1',
    title: "Website Development",
    desc: "Creating responsive and modern websites for businesses and portfolios.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9m3 3h-3m-3 3H5m3 3h-3m12-9H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"/><path d="M16 2v5"/><path d="M8 2v5"/><path d="M3 12h18"/></svg>
    )
  },
  {
    id: 's2',
    title: "Web & App Development",
    desc: "Building custom web and mobile applications tailored to your needs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    )
  },
  {
    id: 's3',
    title: "UI/UX Design",
    desc: "Designing user-friendly and attractive interfaces to improve user experience.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
    )
  },
  {
    id: 's4',
    title: "Maintenance & Support",
    desc: "Fixing bugs, updating features, improving performance, and keeping the system secure.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    )
  }
];

interface ServicesProps {
  onBookCall?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBookCall }) => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 19.7778H22L12 2Z"/>
            </svg>
            <span>SOLUTIONS THAT DRIVE SUCCESS</span>
          </div>
          <h2 className={styles.title}>
            Smart Services For Digital Growth
          </h2>
          <p className={styles.subtitle}>
            Empowering brands with professional web development, from custom SaaS solutions 
            to SEO-optimized business websites.
          </p>
        </div>
      </div>

      <div className={styles.mainContainer}>
        {/* Left Side */}
        <div className={styles.sideCol}>
          {SERVICES.slice(0, 2).map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
              <button className={styles.readMore}>
                Read More
                <div className={styles.arrowIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Center Visual */}
        <div className={styles.centerVisual}>
          <div className={styles.imageCard}>
            <Image 
              src="/images/developer_meeting_client.png" 
              alt="Professional Collaboration"
              fill
              priority
              className={styles.personImg}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.sideCol}>
          {SERVICES.slice(2, 4).map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
              <button className={styles.readMore}>
                Read More
                <div className={styles.arrowIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof Bar */}
      <div className={styles.socialBar}>
        <div className={styles.avatars}>
          <div className={styles.avatarStack}>
            {[1,2,3,4,5].map(i => (
              <div key={i} className={styles.avatar}>
                <Image src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" width={32} height={32} />
              </div>
            ))}
          </div>
          <div className={styles.ratingInfo}>
            <div className={styles.stars}>{"★★★★★"}</div>
            <span>125k+ Customer</span>
          </div>
        </div>
        <div className={styles.socialText}>
          Join Over <span className={styles.greenText}>200K</span> Of Inspiring Creatives
        </div>
        <button className={styles.ctaBtn} onClick={onBookCall}>
          Explore Our Solution
          <div className={styles.ctaArrow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Services;
