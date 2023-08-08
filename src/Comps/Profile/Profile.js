import React from 'react';
import s from './Profile.module.css'
export const Profile = () => {
	return <>
	            
	  <div  className={s.container}> 
		   
		   <h2 className={s.name}> Yaroslav Moroz,</h2>
		   <h2 className={s.age}>24 years old</h2>
		   
		   <div className={s.pic}/>
		 
        <section className={s.text}>
             I am a person who loves to create websites
           and is looking for opportunities to work
           in a team of specialists.
        </section>
           
          <section className={s.text}>
             What attracts me to web development is the limitless
           educational potential along with the ability to help people
           turn their ideas into applications. 
             It is also enticing that the availability of information 
           now allows anyone with Internet access to study online,
           as I did, acquiring all knowledge from open sources.
          </section>
          
        <section className={s.text}>
             Looking for a reliable operating system,
           I settled on the Arch Linux distribution with 
           the i3 window manager to take advantage 
           of its advanced customization options.       </section>
           
        <section className={s.text}> 
             The prospects of modern web technologies are impressive,
           remote education and business have improved life beyond 
           recognition. Human activity can be moved almost entirely 
           online, making any effort in our haste through eternity more efficient. 
        </section>
        
        <section className={s.text}>
               This is the future I want to contribute to.
        </section>
	       
	     </div>
	 </>;
}
