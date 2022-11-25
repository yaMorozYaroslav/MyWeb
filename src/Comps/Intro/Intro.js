import React from "react";
import styles from './Intro.module.css';
//import intro from './intro.png';
export const Intro = () =>{
	return <>
	    <div 
	       className={styles.container}>
	       <p className={styles.text}>
	Great, that you came.<br/> Here is all the information you might
	need to know about me, if you are my client, employer, 
	colleague or just a casual visitor.
    </p></div>
    </>
}
