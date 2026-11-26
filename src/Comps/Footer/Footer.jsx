import React from 'react';
import s from './Footer.module.css';

export const Footer = () => (
  <footer className={s.container} aria-label="Site footer">
    <div className={s.inner}>
      <div className={s.identity}>
        <span className={s.monogram} aria-hidden="true">YM<span>.</span></span>
        <div className={s.identityText}>
          <strong>Yaroslav Moroz</strong>
          <span>Developer · Warsaw, Poland</span>
        </div>
      </div>

      <nav className={s.links} aria-label="Footer links">
        <a href="https://github.com/yaMorozYaroslav" target="_blank" rel="noopener noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href="https://www.linkedin.com/in/yaroslav-moroz-4556a8225/" target="_blank" rel="noopener noreferrer">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a href="mailto:ya.moroz.yaroslav@gmail.com">
          Email <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <div className={s.legal}>
        <span>© {new Date().getFullYear()} Yaroslav Moroz</span>
        <span className={s.separator} aria-hidden="true">·</span>
        <span>Designed & built with care</span>
      </div>
    </div>
  </footer>
);
