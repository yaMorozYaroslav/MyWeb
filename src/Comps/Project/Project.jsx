import React from 'react';
import s from './Project.module.css';

import {
  LgLaptopZoom,
  MdLaptopZoom,
  TabletZoom,
  SmPhoneZoom,
  LgPhoneZoom
} from './lenses.jsx';

import { ScreenSize } from '../../screen';

export function Project() {
  function openCode() {
    window.open('https://github.com/yaMorozYaroslav/IdeaClient');
  }

  function openApp() {
    window.open('https://idea-sphere.vercel.app');
  }

  function openBack() {
    window.open('https://idea-sphere-50bb3c5bc07b.herokuapp.com');
  }

  const screen = ScreenSize();

  return (
    <>
      <div className={s.container}>
        <div className={s.zoomCon}>
          {screen.lapXL ? <LgLaptopZoom /> : null}
          {screen.lapM || screen.lapL ? <MdLaptopZoom /> : null}
          {screen.lapS ? <TabletZoom /> : null}
          {screen.mobL ? <LgPhoneZoom /> : null}
          {screen.mobS || screen.mobM ? <SmPhoneZoom /> : null}
        </div>

        <div className={s.descAndButs}>
          <div className={s.description}>
            <h2 className={s.descTitle}>Description</h2>

            <section className={s.text}>
              Idea-Sphere is a full-stack web app built with Next.js, Express.js, and MongoDB.
              It's designed to be a space where people can ask questions, give answers, and preserve meaningful ideas.
            </section>

            <section className={s.text}>
              Users can post public or anonymous questions, reply to others, like responses, and interact freely —
              all while being protected by token-based authentication and role-based permissions.
            </section>

            <section className={s.text}>
              What makes this project special is the idea of <strong>permanence</strong> —
              the content is meant to last, not disappear like social media noise.
              It's like a digital archive of voices, thoughts, and clarity.
            </section>

            <section className={s.text}>
              In the future, I plan to introduce question categorization, answer boosting,
              OAuth login, and improved moderation tools. I also want to enhance global access and language support.
            </section>

            <section className={s.tagline}>
              A space where ideas live, not disappear.
            </section>
          </div>

          <section className={s.buttons}>
            <ul className={s.features}>
              <h3>Available features</h3>
              <li>Post Questions & Answers</li>
              <li>Anonymous & Authenticated Users</li>
              <li>Like System for Replies</li>
              <li>Role-Based Access Control</li>
              <li>Secure Token Authentication</li>
              <li>Responsive UI (Mobile & Desktop)</li>
            </ul>

            <button className={s.butt} onClick={openCode}>
              <p className={s.butText}>Open Code on GitHub</p>
            </button>
            <button className={s.butt} onClick={openApp}>
              <p className={s.butText}>Open Application on Vercel</p>
            </button>
            <button className={s.butt} onClick={openBack}>
              <p className={s.butText}>Open Backend on Heroku</p>
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
