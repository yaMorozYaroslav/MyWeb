import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Intro.module.css';

export function Intro() {
  return (
    <section className={styles.page} aria-label="Introduction">
      <div className={styles.surface}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            WELCOME TO MY PORTFOLIO
          </p>
          <h1 className={styles.title}>
            Building ideas
            <span>into working software.</span>
          </h1>
          <p className={styles.lead}>
            I'm Yaroslav Moroz, a self-taught IT specialist focused on web
            development. I build applications, explore ideas, and turn
            curiosity into useful software.
          </p>
          <p className={styles.supporting}>
            Here you can explore examples of my work, learn about my approach,
            and find the source code behind the projects. You can also reach me
            directly through the Contacts page.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} to="/project">
              Explore projects <span aria-hidden="true">↗</span>
            </Link>
            <Link className={styles.secondary} to="/profile">
              About me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.showcase}>
          <article className={styles.projectCard}>
            <div className={styles.cardOverline}>
              <span>FEATURED WORK / 01</span>
              <span aria-hidden="true">✳</span>
            </div>
            <h2>Idea-Sphere</h2>
            <p>
              A full-stack space for questions, answers, and ideas that last.
              Explore the app, its features, and the source code.
            </p>
            <div className={styles.tech} aria-label="Technologies used">
              <span>Next.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <Link className={styles.cardLink} to="/project">
              View project details <span aria-hidden="true">↗</span>
            </Link>
          </article>

          <div className={styles.highlightGrid}>
            <Link className={styles.highlightCard} to="/profile">
              <span>MY BACKGROUND</span>
              <strong>Profile <span aria-hidden="true">↗</span></strong>
            </Link>
            <Link className={styles.highlightCard} to="/contacts">
              <span>LET'S CONNECT</span>
              <strong>Contact me <span aria-hidden="true">↗</span></strong>
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.availability}>
            <span className={styles.availableDot} aria-hidden="true" />
            Interested in meaningful collaborations
          </span>
          <p>© {new Date().getFullYear()} Yaroslav Moroz</p>
        </div>
      </div>
    </section>
  );
}
