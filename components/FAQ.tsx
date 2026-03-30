import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ_DATA = [
  {
    question: "What is a web development company?",
    answer: "A web development company like Dsqaure provides professional website development services, including frontend development, backend development, and full stack development to build fast, secure, and scalable websites for businesses."
  },
  {
    question: "Why should I choose a professional web development company?",
    answer: "Choosing a professional web development company ensures that your website is SEO-friendly, mobile responsive, and optimized for performance. Dsqaure delivers modern web design and custom web solutions tailored to your business needs."
  },
  {
    question: "What services does Dsqaure provide?",
    answer: "Dsqaure offers a wide range of services including web development, React development, full stack development, custom software development, and SEO-friendly website design solutions."
  },
  {
    question: "What is full stack development?",
    answer: "Full stack development involves both frontend and backend development. Dsqaure provides full stack web development services using modern technologies to build complete and scalable web applications."
  },
  {
    question: "Do you provide React JS development services?",
    answer: "Yes, Dsqaure specializes in React JS development, building fast, interactive, and high-performance web applications using modern frontend technologies."
  },
  {
    question: "How much does website development cost?",
    answer: "Website development cost depends on features, design, and functionality. Dsqaure offers affordable website development services tailored for startups, small businesses, and enterprises."
  },
  {
    question: "Do you create SEO-friendly websites?",
    answer: "Yes, Dsqaure builds SEO-friendly websites with proper structure, fast loading speed, mobile responsiveness, and optimized content to help improve search engine rankings."
  },
  {
    question: "What technologies do you use for web development?",
    answer: "Dsqaure uses modern technologies like React, Node.js, JavaScript, and full stack frameworks to develop scalable and secure web applications."
  },
  {
    question: "Do you provide custom software development?",
    answer: "Yes, Dsqaure offers custom software development solutions for businesses, including CRM, ERP, and automation software tailored to specific business needs."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, Dsqaure provides website redesign services to improve UI/UX, performance, SEO, and overall user experience of your existing website."
  },
  {
    question: "How long does it take to build a website?",
    answer: "The timeline depends on project complexity. A basic website may take 1–2 weeks, while advanced web applications may take several weeks."
  },
  {
    question: "Do you provide website maintenance services?",
    answer: "Yes, Dsqaure offers website maintenance services including updates, bug fixes, security improvements, and performance optimization."
  },
  {
    question: "What is the benefit of a responsive website?",
    answer: "A responsive website adapts to all devices like mobile, tablet, and desktop, improving user experience and SEO ranking."
  },
  {
    question: "Do you build eCommerce websites?",
    answer: "Yes, Dsqaure develops eCommerce websites with features like payment gateway integration, product management, and secure checkout systems."
  },
  {
    question: "How can I get started with Dsqaure?",
    answer: "You can contact Dsqaure through the website to discuss your requirements and get a custom web development or software solution tailored to your business."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 19.7778H22L12 2Z"/>
            </svg>
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Answers to common questions about my work and process.</p>
        </div>

        <div className={styles.faqList}>
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.faqQuestionRow}>
                <div className={styles.questionContent}>
                  <h3 className={styles.question}>{item.question}</h3>
                  {openIndex === index && (
                    <p className={styles.answer}>{item.answer}</p>
                  )}
                </div>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconCircle}>
                    {openIndex === index ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
