import React from 'react';
import s from './Profile.module.css'
export const Profile = () => {
	return <>
	            
	  <div  className={s.container}> 
		
		   <div className={s.pic}/>
		   
		   <h2 className={s.name}> Jaroslav Moroz, 23 years old</h2>
		 
        <section className={s.text}>
                        I'm a web developer who learned
                      to use the React library by practicing with
                       the documentation in addition to watching online courses.
        </section>
           
          <section className={s.text}>
                      The desire to understand the big picture
                   inspired me to study the backend and create 
                   a REST API that provides authentication.
          </section>
          
        <section className={s.text}>
                               Looking for a reliable operating system,
                             I settled on the Arch Linux distribution with 
                             the i3 window manager to take advantage 
                             of its advanced customization options.
        </section>
        <section className={s.text}> 
                      The prospects of modern web technologies are impressive,
                       online education and business, together with digital 
                       documents and forms, have improved life beyond 
                       recognition. Human activity can be almost completely
                   transferred to the Internet, which will make any effort
                   in our haste through eternity more efficient. 
                      
        </section>
        <section className={s.text}>
               This is the future I want to contribute to.
        </section>
	       
	     </div>
	 </>;
}
