import React from 'react';
import s from './Profile.module.css';
import photo from './myPhoto.jpg';
//<img className={s.photo} src={photo} alt="yaro"/>
export const Profile = () => {
	return <>
	            
	  <div  className={s.container}> 
		
		   <div className={s.pic}/>
		   
		   <h2 className={s.name}> Jaroslav Moroz, 23 years old</h2>
		 
        <section className={s.text}>
           I am a self-taught web developer who learned 
           how to use the ReactJS library by reading 
           documentation and watching online courses.
          
        Being able to create a backend with ExpressJS 
        and MongoDB inspired me to build
        a REST API that provides authentication.
          <br/>
     
        <section>
            To improve the performance of my laptops,
            I installed an Arch Linux distribution with 
            an i3 window manager and partitioned 
            the hard drive to play games on Win 11.
        </section><br/>
		  
       I wanna participate in the creation of AI web 
	 applications. Waiting for new acquaintances and profitable
	  offers.
	        </section>
	     </div>
	 </>;
}
