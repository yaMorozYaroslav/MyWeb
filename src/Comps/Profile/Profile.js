import React from 'react';
import s from './Profile.module.css'
export const Profile = () => {
	return <>
	            
	  <div  className={s.container}> 
		
		   <div className={s.pic}/>
		   
		   <h2 className={s.name}> Jaroslav Moroz, 23 years old</h2>
		 
        <section className={s.text}>
                  I'm a self-taught web developer who learned
              how to use the React library by reading the documentation,
               watching online courses, and practicing.
        </section>
           
          <section className={s.text}>
                  The desire to see the big picture inspired me 
                  to explore the backend to create a REST API
                   that provides authentication.
          </section>
          
        <section className={s.text}>
                   For my daily tasks, I installed the Arch Linux
                    distribution with the i3 window manager 
                    to take advantage of its customizability.
        </section>
        
	    <section className={s.text}>
       I can develop and maintain websites and applications.
        Waiting for new acquaintances and profitable
	  offers.
	        </section>
	        
	     </div>
	 </>;
}
