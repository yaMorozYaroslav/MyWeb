import React from 'react';
import styles from './Profile.module.css';
import photo from './myPhoto.jpg';

export const Profile = () => {
	return <>
	            
	  <div  className={styles.container}> 
		<div className={styles.text}>
		
		   <img className={styles.photo} src={photo} alt="yaro"/>
		   
		   <h1 className={styles.name}> Jaroslav Moroz, 23 years old</h1>
		 
        <section>I'm a self-taught NodeJS developer who explores the entire stack
	 to understand the overall development process. Being able to use 
	 JS both on the server side and on the client side inspires me 
     to explore all the complexity by focusing on one language. </section><br/>
     
        I installed the Arch Linux distribution with the i3 window manager.
     on both of my laptops to take advantage of its performance
     and partitioned the hard drive of one of them to play games on Win 11.<br/>
		  
      In the future, I wanna participate in the creation of AI web 
	 applications. It is a long way, but why not if there
	 is a lifetime. Waiting for new acquaintances and profitable
	  offers.
	     </div>
	   </div>
	 </>;
}
