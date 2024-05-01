import React from 'react';
import s from './Profile.module.css'
import {ScreenSize} from '../../screen'

export const Profile = () => {
	const imgUrl = new URL('/myPhoto.jpg', import.meta.url).href
	console.log(imgUrl)
	const [zoom, setZoom] = React.useState(false)
	const screen = ScreenSize()
	const onZoom =()=> {
		if(screen.mobS||screen.mobM)setZoom(!zoom)
		}
		 //~ <div onClick={onZoom} className={!zoom?s.pic:s.picZoom}/>
	return <>
	            
	  <div  className={s.container}> 
		   
		   <h2 className={s.name}> Yaroslav Moroz,</h2>
		   <h2 className={s.age}>25 years old</h2>
		   
		   <img onClick={onZoom} src={imgUrl}
		        className={!zoom?s.pic:s.picZoom}/>
		 
        <section className={s.text}>
             I am a web application developer looking for
            opportunities to develop great applications.
        </section>
           
          <section className={s.text}>
             The limitless educational potential of programming
            and the desire to help people turn their ideas 
            into websites motivate me to keep learning.     </section>
           <section className={s.text}>
             It is also enticing that the availability of information 
            now allows anyone with Internet access to study online,
            as I did, acquiring all knowledge from open sources.       </section>
           
        <section className={s.text}>
             Looking for a reliable operating system,
           I settled on the Arch Linux distribution with 
           the i3 window manager to take advantage 
           of its advanced customization options.       </section>
           
        <section className={s.text}> 
             The prospects of modern web technologies are impressive,
           remote education and business have improved life beyond 
           recognition. Human activity can be moved almost entirely 
           online, making our efforts in haste through eternity more efficient. 
        </section>
        
        <section className={s.text}>
               This is the future I want to contribute to.
        </section>
	       
	     </div>
	 </>;
}
