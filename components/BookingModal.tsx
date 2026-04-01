'use client';

import React, { useState, useEffect } from 'react';
import styles from './BookingModal.module.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INDUSTRIES = [
  { id: 'saas', label: 'SaaS / Software' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'fintech', label: 'FinTech' },
  { id: 'healthcare', label: 'HealthCare' },
  { id: 'realestate', label: 'Real Estate' },
  { id: 'other', label: 'Other' }
];

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [budget, setBudget] = useState(10000);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  });

  // Handle escape key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', { ...formData, budget });
    // Add submission logic here (e.g. EmailJS, backend API)
    alert('Thank you! We will get back to you shortly.');
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.active : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.header}>
          <h2 className={styles.title}>Book Strategy Call</h2>
          <p className={styles.subtitle}>Fill in the details below and we'll reach out within 24 hours.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <input 
              type="text" 
              name="name"
              required 
              placeholder="e.g. John Doe" 
              className={styles.input}
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              required 
              placeholder="+91 00000 00000" 
              className={styles.input}
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Work Email</label>
            <input 
              type="email" 
              name="email"
              required 
              placeholder="john@company.com" 
              className={styles.input}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Company Name</label>
            <input 
              type="text" 
              name="company"
              required 
              placeholder="e.g. TechCorp Solutions" 
              className={styles.input}
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label className={styles.label}>Industry</label>
            <div className={styles.customSelectWrapper}>
              <div 
                className={`${styles.customSelectTrigger} ${isDropdownOpen ? styles.open : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{formData.industry ? INDUSTRIES.find(i => i.id === formData.industry)?.label : 'Select your industry'}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}>
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
              
              {isDropdownOpen && (
                <div className={styles.customOptions}>
                  {INDUSTRIES.map((industry) => (
                    <div 
                      key={industry.id} 
                      className={`${styles.customOption} ${formData.industry === industry.id ? styles.selectedOption : ''}`}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, industry: industry.id }));
                        setIsDropdownOpen(false);
                      }}
                    >
                      {industry.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <div className={styles.sliderHeader}>
              <label className={styles.label}>Estimated Budget (INR)</label>
              <span className={styles.budgetValue}>₹{budget === 200000 ? '2,00,000+' : budget.toLocaleString('en-IN')}</span>
            </div>
            <div className={styles.sliderContainer}>
              <input 
                type="range" 
                min="10000" 
                max="200000" 
                step="5000" 
                className={styles.slider} 
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
              />
              <div className={styles.sliderHeader} style={{ marginTop: '-15px' }}>
                <span className={styles.subtitle}>₹10,000</span>
                <span className={styles.subtitle}>₹2,00,000+</span>
              </div>
            </div>
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label className={styles.label}>Tell us about your project</label>
            <textarea 
              name="message"
              required 
              placeholder="Briefly describe your goals, timeline, and requirements..." 
              className={styles.textarea}
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className={`${styles.submitBtn} ${styles.fullWidth}`}>
            Submit Request
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
