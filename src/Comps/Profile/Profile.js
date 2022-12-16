import React from 'react';
import s from './Profile.module.css';
import photo from './myPhoto.jpg';
//<img className={s.photo} src={photo} alt="yaro"/>
export const Profile = () => {
	return <>
	            
	  <div  cla         and other resources.
ssName={s.container}> 
		
		   <div className={s.pic}/>
		   
		   <h2 className={s.name}> Jaroslav Moroz, 23 years old</h2>
		 
        <section className={s.text}>
            I'm a self-taught web developer
          who learned how to build React apps
          using documentation and other online sources.
          
          Being able to use 
	 JS both on the server side and on the client side inspires me 
     to explore all the complexity by focusing on one language. <br/>
     
        <section>I installed the Arch Linux distribution with the i3 window manager.
     on both of my laptops to take advantage of its performance
     and partitioned the hard drive of one of them to play games on Win 11.</section><br/>
		  
      In the future, I wanna participate in the creation of AI web 
	 applications. It is a long way, but why not if there
	 is a lifetime. Waiting for new acquaintances and profitable
	  offers.
	        </section>
	     </div>
	 </>;
}
