import React from "react";
import styles from './Intro.module.css';
//import intro from './intro.png';
export const Intro = () =>{
	return <>
	    <div 
	       className={styles.container}>
	       <p className={styles.text}>
	Welcome to my portfolio website.<br/>
	Here you can find basic information 
	about my skills, aspirations and areas of interest.<br/>
	I also prepared an example of my work with a description and links 
	to its code and a working application.
  
	Enjoy the application, I tried to make it convenient for you.
        </p>
    </div>
    </>
}
