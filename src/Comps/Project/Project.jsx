import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Project.module.css';

const features = [
  'Post public questions and answers',
  'Participate anonymously or with an account',
  'Like replies and join discussions',
  'Role-based access control',
  'Token-based authentication',
  'Responsive layouts for mobile and desktop'
];

const technologies = ['Next.js', 'Express.js', 'MongoDB', 'Authentication', 'Responsive UI'];

const links = [
  {
    label: 'VIEW LIVE APP',
    title: 'Open Idea-Sphere',
    description: 'Explore the deployed frontend',
    href: 'https://idea-sphere.vercel.app/'
  },
  {
    label: 'SOURCE CODE',
    title: 'Browse GitHub repository',
    description: 'Inspect the application source',
    href: 'https://github.com/yaMorozYaroslav/IdeaClient'
  },
  {
    label: 'BACKEND ENDPOINT',
    title: 'Open Heroku service',
    description: 'Backend URL — availability may vary',
    href: 'https://idea-sphere-50bb3c5bc07b.herokuapp.com/'
  }
];

const screenshots = [
  { src: '/project.png', alt: 'Idea-Sphere application screenshot', label: 'APPLICATION VIEW / 01' },
  { src: '/project0.png', alt: 'Idea-Sphere alternate interface screenshot', label: 'APPLICATION VIEW / 02' }
];

export function Project() {
  return (
    <section className={styles.page} aria-label="Featured project">
      <div className={styles.surface}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            SELECTED WORK / 01
          </p>
          <h1 className={styles.title}>
            Idea-Sphere
            <span>Ideas worth keeping.</span>
          </h1>
          <p className={styles.lead}>
            A full-stack space for people to ask questions, give answers,
            and preserve meaningful ideas rather than lose them in a feed.
          </p>
          <div className={styles.tags} aria-label="Project technologies">
            {technologies.map(item => <span key={item}>{item}</span>)}
          </div>
          <div className={styles.actions}>
            <a className={styles.primary} href="https://idea-sphere.vercel.app/" target="_blank" rel="noopener noreferrer">
              Explore live app <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.secondary} href="https://github.com/yaMorozYaroslav/IdeaClient" target="_blank" rel="noopener noreferrer">
              View source code <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <div className={styles.preview} aria-label="Project screenshots">
          <div className={styles.previewTop}>
            <span>INTERFACE PREVIEW</span>
            <span className={styles.previewDots} aria-hidden="true">● ● ●</span>
          </div>
          <div className={styles.screenshots}>
            {screenshots.map(({ src, alt, label }) => (
              <a key={src} className={styles.screen} href={src} target="_blank" rel="noopener noreferrer"
                aria-label={`Open full-size screenshot: ${label}`}>
                <img src={src} alt={alt} loading="lazy" decoding="async" />
                <span className={styles.screenLabel}>{label} <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.descriptionCard}>
            <p className={styles.sectionLabel}>THE IDEA</p>
            <h2>Questions, answers, and a lasting record</h2>
            <p>
              Idea-Sphere is a web application built with Next.js, Express.js,
              and MongoDB. People can post public or anonymous questions,
              reply to others and like responses.
            </p>
            <p>
              The app uses token-based authentication and role-based permissions.
              Its guiding idea is <strong>permanence</strong>: making room for
              thoughtful contributions instead of social-media noise.
            </p>
            <p className={styles.tagline}>A space where ideas live, not disappear.</p>
          </div>

          <div className={styles.featuresCard}>
            <p className={styles.sectionLabel}>CAPABILITIES</p>
            <h2>Available features</h2>
            <ul className={styles.features}>
              {features.map(feature => (
                <li key={feature}><span className={styles.check} aria-hidden="true">✓</span>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.linkPanel}>
          <div className={styles.panelHead}>
            <div>
              <p className={styles.sectionLabel}>EXPLORE THE PROJECT</p>
              <h2>Links & resources</h2>
            </div>
            <p>Application, source code and backend</p>
          </div>
          <div className={styles.linkGrid}>
            {links.map(({ label, title, description, href }) => (
              <a className={styles.resourceCard} key={href} href={href} target="_blank" rel="noopener noreferrer">
                <span className={styles.resourceTop}>
                  <span>{label}</span><span className={styles.arrow} aria-hidden="true">↗</span>
                </span>
                <strong>{title}</strong>
                <span className={styles.resourceNote}>{description}</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p><span className={styles.bottomDot} aria-hidden="true" />Continuing to learn and improve</p>
          <Link to="/contacts">Discuss a project <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
