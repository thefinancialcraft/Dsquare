'use client';

import React from 'react';
import styles from './Pricing.module.css';

const PLANS = [
  {
    id: 'starter',
    name: "Starter Plan",
    tagline: "Perfect for Small Clinics & Local Businesses",
    price: "9,999",
    originalPrice: "19,999",
    features: [
      "3 Page Professional Website",
      "Mobile & Tablet Optimized",
      "Contact Form Integration",
      "Google Map Integration",
      "Basic SEO Setup",
      "Fast Loading Speed",
      "Secure Website (SSL)"
    ],
    bonuses: [
      "Free Hosting (1 Year)",
      "Free Technical Support (1 Month)"
    ],
    highlight: false,
    label: "Launch Offer"
  },
  {
    id: 'business',
    name: "Business Plan",
    tagline: "Most Popular Choice",
    price: "20,000",
    originalPrice: "40,000",
    features: [
      "Everything in Starter Plan",
      "Advanced SEO (Rank on Google)",
      "Online Appointment System",
      "WhatsApp Chat Integration",
      "Lead Form + Email Alerts",
      "Google Map + Business Listing",
      "Performance Optimization"
    ],
    bonuses: [
      "Free Domain (1 Year)",
      "Free Hosting (1 Year)",
      "Free Support (1 Month)",
      "Free Backup Setup"
    ],
    highlight: true,
    label: "Bestseller"
  },
  {
    id: 'premium',
    name: "Premium Plan",
    tagline: "For Serious Business Growth",
    price: "25,000",
    originalPrice: "50,000",
    features: [
      "5–7 Pages Premium Design",
      "Everything in Business Plan",
      "Advanced UI/UX (High Conversion)",
      "E-commerce / Product Listing",
      "WhatsApp AI Chat Bot",
      "Marketing Automation",
      "Lead Management System",
      "Advanced SEO (On-page)",
      "Core Web Vitals Setup"
    ],
    bonuses: [
      "Free Domain (1 Year)",
      "Free Hosting (1 Year)",
      "Free Support (1 Month)",
      "Maintenance Guide"
    ],
    highlight: false,
    label: "Ultimate"
  }
];

const PricingCard = ({ plan }: { plan: any }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const initialCount = 4;
  const hasMore = plan.features.length > initialCount;
  const displayFeatures = isExpanded ? plan.features : plan.features.slice(0, initialCount);

  return (
    <div className={`${styles.card} ${plan.highlight ? styles.popular : ''}`}>
      {plan.highlight && <div className={styles.bestsellerBadge}>MOST POPULAR</div>}
      
      <div className={styles.cardHeader}>
        <h3 className={styles.planName}>{plan.name}</h3>
        <p className={styles.tagline}>{plan.tagline}</p>
        <div className={styles.priceContainer}>
          <div className={styles.priceMain}>
            <span className={styles.currency}>₹</span>
            <span className={styles.price}>{plan.price}</span>
          </div>
          <div className={styles.discountInfo}>
            <span className={styles.originalPrice}>₹{plan.originalPrice}</span>
            <span className={styles.savePercent}>50% OFF</span>
          </div>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.featureList}>
          <p className={styles.sectionLabel}>Plan Features</p>
          {displayFeatures.map((feature: string, i: number) => (
            <div key={i} className={styles.featureItem}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {feature}
            </div>
          ))}
          
          {hasMore && (
            <button 
              className={styles.showMoreBtn} 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : `+ ${plan.features.length - initialCount} More Features`}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ transform: isExpanded ? 'rotate(180deg)' : 'none' }}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          )}
        </div>

        {/* Bonus list always visible or only when expanded? Let's keep it visible per plan logic */}
        <div className={styles.bonusList}>
          <p className={styles.sectionLabelBonus}>🎁 Free Bonuses</p>
          {plan.bonuses.map((bonus: string, i: number) => (
            <div key={i} className={styles.bonusItem}>
              <span>✔</span>
              {bonus}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <button className={styles.ctaBtn}>
          Get Started Now
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 19.7778H22L12 2Z"/>
            </svg>
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className={styles.title}>Investment For Your Success</h2>
          <p className={styles.subtitle}>Choose the perfect plan to scale your digital presence.</p>
        </div>

        <div className={styles.grid}>
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Pricing;
