import React from "react";
import styles from './Intro.module.css';

export const Intro = () =>{
	return <>
	    <div 
	       className={styles.container}>
	       <p className={styles.text}>
	Welcome to the site.<br/>
	
Here you will find important information
about my skills, aspirations and areas of interest
 along with an example of work.<br/>
 Deployed application and its source code
  available via links.<br/>
    I also made it possible to write me an email
     directly from the "Contacts" section.<br/>
        All photos are copyrighted.
        </p>
    </div>
    </>
}
