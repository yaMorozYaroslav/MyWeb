import React from "react";
import styles from './Intro.module.css';
//import intro from './intro.png';
export const Intro = () =>{
	return <>
	    <div 
	       className={styles.container}>
	       <p className={styles.text}>
	Welcome to my portfolio website.<br/>
	Here you will find important information
about my skills, aspirations and areas of interest
 along with an example of my work. the source code 
 of my project and the website are available in one 
 click, as well as the deployed project<br/>
  
    In the "Contacts" section, I made it possible to send me an email directly from there.
        </p>
    </div>
    </>
}
