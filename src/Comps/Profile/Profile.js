import React from 'react';
import s from './Profile.module.css'
export const Profile = () => {
	return <>
	            
	  <div  className={s.container}> 
		
		   <div className={s.pic}/>
		   
		   <h2 className={s.name}> Jaroslav Moroz, 23 years old</h2>
		 
        <section className={s.text}>
                I'm a self-taught web developer who learned
              how to use the React library by reading 
              the documentation, watching online courses, and practicing.<br/>
        </section>
           
          <section className={s.text}>
                The desire to develop a full stack in NodeJS 
                inspired me to create a REST API that provides authentication.
          </section>
          
        <section className={s.text}>
                A few months ago I installed the Arch Linux distribution with the i3
                 window manager and enjoy its efficiency and customization.
        </section>
        
	    <section className={s.text}>
       I can develop and maintain websites and applications.
        Waiting for new acquaintances and profitable
	  offers.
	        </section>
	        
	     </div>
	 </>;
}
