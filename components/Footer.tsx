import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Company Logo & Socials */}
          <div className={styles.companyInfo}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/logo.png" 
                alt="D Square Logo" 
                width={180} 
                height={48} 
                className={styles.logoImg}
              />
            </div>
            <p className={styles.description}>
              Premium full-stack web development agency specializing in next-level 
              automation, sleek UI designs, and high-performance digital solutions.
            </p>
            <div className={styles.socialIcons}>
              <div className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div className={styles.socialIcon} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </div>
              <div className={styles.socialIcon} aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <div className={styles.socialIcon} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Our Services</h4>
            <div className={styles.links}>
              <span className={styles.link}>Web Development</span>
              <span className={styles.link}>Custom GPTs</span>
              <span className={styles.link}>Mobile Solutions</span>
              <span className={styles.link}>UI/UX Design</span>
              <span className={styles.link}>Cloud Integration</span>
            </div>
          </div>

          {/* Column 3: Company */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <div className={styles.links}>
              <span className={styles.link}>About D Square</span>
              <span className={styles.link}>Our Projects</span>
              <span className={styles.link}>Case Studies</span>
              <span className={styles.link}>Success Stories</span>
              <span className={styles.link}>Careers</span>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem} title="Email Us">
                <svg className={styles.contactIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>hello@dsquare.agency</span>
              </div>
              <div className={styles.contactItem} title="Location">
                <svg className={styles.contactIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Digital Headquarter, Global</span>
              </div>
              <div className={styles.contactItem} title="Working Hours">
                <svg className={styles.contactIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>24/7 Global Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            &copy; {currentYear} D SQUARE Agency. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <span className={styles.legalLink}>Privacy Policy</span>
            <span className={styles.legalLink}>Terms of Service</span>
            <span className={styles.legalLink}>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
