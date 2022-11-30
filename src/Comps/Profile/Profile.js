import React from 'react';
import styles from './Profile.module.css';
import photo from './myPhoto.jpg';

export const Profile = () => {
	return <>
	                 <div  className={styles.container}> 
     
	    
		<p className={styles.text}>
		<img className={styles.photo} src={photo} alt="yaro"/>
		 I am a self-taught NodeJS developer<br/> who explores the
	 entire stack to understand the overall
	 development process. The ability to use JS for both the 
	 backend and the frontend inspires me to do this, because <br/>I 
	 can dive deeper while focusing on one language. Mainly 
	 interested in creating websites and applications. In the 
	 future, I wanna participate in the creation of AI web 
	 applications. It is a long way, but why not if there
	 is a lifetime. Waiting for new acquaintances and profitable
	  offers.</p>
     <p className={styles.name}>
	    Jaroslav Moroz, 23 years old</p>
	  </div>
	 </>;
}
