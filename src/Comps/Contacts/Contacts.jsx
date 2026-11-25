import React from 'react';
import styles from './Contacts.module.css';
import { Email } from '../Email/Email';
import { OpenContext } from '../../Context/OpenState';

export function Contacts() {
  const {alertState, mailForm, openAlert, closeAlert, openMailForm, closeMailForm} = React.useContext(OpenContext);
  const data = [
    ['Number', <a href="tel:+48579232090">+48 579 232 090</a>],
    ['Email', <a href="mailto:ya.moroz.yaroslav@gmail.com">ya.moroz.yaroslav@gmail.com</a>],
    ['LinkedIn', <a href="https://www.linkedin.com/in/yaroslav-moroz-4556a8225/" target="_blank" rel="noopener noreferrer">linkedin.com/in/yaroslav-moroz-4556a8225/</a>],
    ['GitHub', <a href="https://github.com/yaMorozYaroslav" target="_blank" rel="noopener noreferrer">github.com/yaMorozYaroslav</a>]
  ];
  return <section className={styles.can} aria-label="Contact details">
    {mailForm ? <Email alertState={alertState} openAlert={openAlert} closeAlert={closeAlert} closeMailForm={closeMailForm}/> : <>
      <button type="button" className={styles.clicker} onClick={openMailForm}>Click to email me</button>
      {data.map(([heading, value]) => <React.Fragment key={heading}>
        <h2 className={styles.label}>{heading}</h2>
        <p className={styles.discr}>{value}</p>
      </React.Fragment>)}
      <p className={styles.city}>Warsaw, Poland</p>
      <a className={styles.link} href="https://github.com/yaMorozYaroslav/MyWeb" target="_blank" rel="noopener noreferrer">Link To Source Code</a>
    </>}
  </section>;
}
