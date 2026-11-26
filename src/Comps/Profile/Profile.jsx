import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

export function Profile() {
  const today = new Date();
  const age = today.getFullYear() - 1999 -
    (today.getMonth() < 2 || (today.getMonth() === 2 && today.getDate() < 17) ? 1 : 0);
  const portraitUrl = new URL('/myImg.jpg', import.meta.url).href;
  const [expanded, setExpanded] = React.useState(false);

  return (
    <section className={styles.page} aria-label="About Yaroslav Moroz">
      <div className={styles.surface}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            ABOUT ME
          </p>
          <h1 className={styles.title}>
            Curious by nature.
            <span>Developer by practice.</span>
          </h1>
          <p className={styles.lead}>
            I'm Yaroslav Moroz, {age}, based in Warsaw. I enjoy understanding
            how technology works and turning that understanding into useful projects.
          </p>
          <p className={styles.sublead}>
            My path has been self-directed, guided by persistence and a
            genuine interest in building things that work.
          </p>
          <div className={styles.tags} aria-label="Areas I work with">
            <span>JavaScript</span>
            <span>Web APIs</span>
            <span>Authentication</span>
            <span>Linux</span>
          </div>
          <div className={styles.actions}>
            <Link className={styles.primary} to="/project">
              See my work <span aria-hidden="true">↗</span>
            </Link>
            <Link className={styles.secondary} to="/contacts">
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <figure className={styles.portrait}>
          <button
            className={expanded ? styles.portraitExpanded : styles.portraitButton}
            type="button"
            aria-label={expanded ? 'Return portrait to normal size' : 'View larger portrait'}
            aria-pressed={expanded}
            onClick={() => setExpanded(value => !value)}
          >
            <img src={portraitUrl} alt="Portrait of Yaroslav Moroz" />
          </button>
          <figcaption>
            <span>Yaroslav Moroz</span>
            <span>Warsaw, Poland</span>
          </figcaption>
        </figure>

        <div className={styles.story} aria-label="My background and approach">
          <article className={styles.storyCard}>
            <p className={styles.number}>01 / MY APPROACH</p>
            <h2>Curiosity and practice</h2>
            <p>
              I’m a developer shaped by curiosity and practice — building projects,
              solving problems, and learning how technology fits together.
              My path has been self-directed, guided by persistence and a genuine
              interest in understanding how things work.
            </p>
            <p>
              Much of what shaped me comes from open resources and continuous
              experimentation. I see the web as a place where anyone can
              learn, create, and share what they build.
            </p>
          </article>

          <article className={styles.storyCard}>
            <p className={styles.number}>02 / HOW I LEARN</p>
            <h2>Always exploring</h2>
            <p>
              My learning has been fueled by Udemy, YouTube, ChatGPT, and other
              platforms, forming a practical and flexible approach to growth.
              I enjoy using Arch Linux and the i3 window manager for their
              efficiency and simplicity.
            </p>
            <p>
              AI tools often assist me in refining ideas, testing assumptions,
              and improving development speed and consistency.
            </p>
          </article>

          <article className={styles.storyCard}>
            <p className={styles.number}>03 / WHAT I BUILD</p>
            <h2>From idea to deployment</h2>
            <p>
              I work across the full JavaScript stack — building APIs, managing
              authentication, designing responsive interfaces, and deploying
              applications in Linux environments.
            </p>
            <p>
              Attention to clarity, structure, and detail helps me create web
              experiences that are both reliable and enjoyable to use.
            </p>
          </article>

          <article className={styles.storyCard}>
            <p className={styles.number}>04 / LOOKING AHEAD</p>
            <h2>Useful, accessible technology</h2>
            <p>
              My goal is to keep growing as a developer, collaborate with others,
              and contribute to projects that bring real value.
            </p>
            <p>
              The future I want to help shape is one where technology stays open,
              accessible, and constantly improving — making everyday life
              simpler and more connected.
            </p>
          </article>
        </div>

        <div className={styles.bottom}>
          <span><span className={styles.availabilityDot} aria-hidden="true" />Open to meaningful projects</span>
          <Link to="/contacts">Let's connect <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
