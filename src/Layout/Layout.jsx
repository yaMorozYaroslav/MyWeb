import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { OpenContext } from '../Context/OpenState';
import s from './Layout.module.css';

const routes = [
  { title: 'Intro', path: '/', key: '' },
  { title: 'Profile', path: '/profile', key: 'profile' },
  { title: 'Project', path: '/project', key: 'project' },
  { title: 'Contacts', path: '/contacts', key: 'contacts' }
];

export function Layout() {
  const { section, nowIntro, nowProfile, nowProject, nowContacts } =
    React.useContext(OpenContext);
  const { pathname } = useLocation();
  const current = pathname.split('/')[1] || '';

  React.useEffect(() => {
    if (current === '' && section !== 'intro') nowIntro();
    if (current === 'profile' && section !== 'profile') nowProfile();
    if (current === 'project' && section !== 'project') nowProject();
    if (current === 'contacts' && section !== 'contacts') nowContacts();
  }, [current, section, nowIntro, nowProfile, nowProject, nowContacts]);

  return (
    <>
      <nav className={s.nav} aria-label="Primary navigation">
        {routes.map(({ title, path, key }) => {
          const active = current === key;
          return (
            <Link
              key={path}
              className={active ? s.active : s.idle}
              to={path}
              aria-current={active ? 'page' : undefined}
            >
              {title}
            </Link>
          );
        })}
      </nav>
      <section className={s.double}>
        <div className={s.outlet}><Outlet /></div>
      </section>
    </>
  );
}
