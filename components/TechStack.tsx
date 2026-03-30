'use client';

import React from 'react';
import styles from './TechStack.module.css';

const TECH_CATEGORIES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    title: "Frontend Development",
    techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Material-UI", "Framer Motion"]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    title: "Backend Development",
    techs: ["Node.js", "Python", "PHP", "Laravel", "Express.js", "Django", "FastAPI", "NestJS"]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    title: "Database Solutions",
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase", "DynamoDB", "Elasticsearch"]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    title: "Cloud & DevOps",
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    title: "Mobile Development",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin", "PWA", "Expo"]
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="m7 21 0-4"></path>
        <path d="m17 21 0-4"></path>
        <path d="M2 12l10 5 10-5"></path>
        <path d="m12 17 0-5"></path>
      </svg>
    ),
    title: "AI & Machine Learning",
    techs: ["TensorFlow", "PyTorch", "OpenAI", "Langchain", "Hugging Face", "scikit-learn", "Pandas", "NumPy"]
  }
];

const TechStack = () => {
  return (
    <section className={styles.techStack} id="stack">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 19.7778H22L12 2Z"/>
            </svg>
            <span>OUR CORE STACK</span>
          </div>
          <h2 className={styles.title}>Advanced <span className={styles.titleHighlight}>Technology Stack</span></h2>
          <p className={styles.subtitle}>
            We leverage cutting-edge technologies and proven frameworks to build robust, scalable, and future-ready solutions.
          </p>
        </div>

        <div className={styles.grid}>
          {TECH_CATEGORIES.map((cat, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>{cat.icon}</div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <div className={styles.techList}>
                {cat.techs.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
