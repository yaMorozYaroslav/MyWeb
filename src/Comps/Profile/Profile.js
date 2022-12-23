import React from 'react';
import s from './Profile.module.css'
export const Profile = () => {
	return <>
	            
	  <div  className={s.container}> 
		
		   <div className={s.pic}/>
		   
		   <h2 className={s.name}> Jaroslav Moroz, 23 years old</h2>
		 
        <section className={s.text}>
                  I'm a self-taught web developer who learned 
                  how to use the React library by watching online
                  courses in addition to practicing with the documentation.
        </section>
           
          <section className={s.text}>
                  The desire to see the big picture inspired me 
                  to explore the backend and create a REST API
                   that provides authentication.
          </section>
          
        <section className={s.text}>
                   For my daily tasks, I installed the Arch Linux
                    distribution with the i3 window manager 
                    to take advantage of its customizability.
        </section>
        <section className={s.text}> 
                  Fascinated by the power of modern applications,
                   they allow us to browse the Internet, manage files, 
                   edit images, and improve our programming and communication skills.
                    The web apps are especially good and accessible from any platform
                     without having to be downloaded to the device.
        </section>
	    <section className={s.text}>
       I can develop and maintain websites and applications.
        Waiting for new acquaintances and profitable
	  offers.
	        </section>
	        
	     </div>
	 </>;
}
