import React from 'react';
import styles from './Contacts.module.css';
import { Email } from '../Email/Email';
import { OpenContext } from '../../Context/OpenState';

const channels = [
  {
    label: 'EMAIL',
    value: 'ya.moroz.yaroslav@gmail.com',
    note: 'Send a direct message',
    href: 'mailto:ya.moroz.yaroslav@gmail.com'
  },
  {
    label: 'PHONE',
    value: '+48 579 232 090',
    note: 'Call from your device',
    href: 'tel:+48579232090'
  },
  {
    label: 'LINKEDIN',
    value: 'LinkedIn profile',
    note: 'Professional connections',
    href: 'https://www.linkedin.com/in/yaroslav-moroz-4556a8225/',
    external: true
  },
  {
    label: 'GITHUB',
    value: 'GitHub projects',
    note: 'Code and experiments',
    href: 'https://github.com/yaMorozYaroslav',
    external: true
  }
];

export function Contacts() {
  const { alertState, mailForm, openAlert, closeAlert, openMailForm, closeMailForm } =
    React.useContext(OpenContext);

  return (
    <section className={styles.can} aria-label="Contact Yaroslav Moroz">
      {mailForm ? (
        <div className={styles.formSurface}>
          <Email
            alertState={alertState}
            openAlert={openAlert}
            closeAlert={closeAlert}
            closeMailForm={closeMailForm}
          />
        </div>
      ) : (
        <div className={styles.surface}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>
              <span className={styles.accentDot} aria-hidden="true" />
              GET IN TOUCH
            </p>
            <h1 className={styles.heading}>
              Have an idea?
              <span>Let's connect.</span>
            </h1>
            <p className={styles.description}>
              A project, a question, or an interesting collaboration — I'd love to hear about it.
            </p>

            <div className={styles.actions}>
              <button className={styles.primaryButton} type="button" onClick={openMailForm}>
                Send a message <span aria-hidden="true">↗</span>
              </button>
              <a
                className={styles.secondaryLink}
                href="https://github.com/yaMorozYaroslav/MyWeb"
                target="_blank"
                rel="noopener noreferrer"
              >
                View source code <span aria-hidden="true">↗</span>
              </a>
            </div>

            <p className={styles.location}>
              <span className={styles.locationDot} aria-hidden="true" />
              Warsaw, Poland
            </p>
          </div>

          <div className={styles.channels} aria-label="Contact options">
            {channels.map(({ label, value, note, href, external }) => (
              <a
                key={label}
                className={styles.contactCard}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className={styles.cardTop}>
                  <span className={styles.cardLabel}>{label}</span>
                  <span className={styles.cardArrow} aria-hidden="true">↗</span>
                </span>
                <span className={styles.cardValue}>{value}</span>
                <span className={styles.cardNote}>{note}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
