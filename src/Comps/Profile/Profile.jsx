import React from 'react';
import s from './Profile.module.css'
import {ScreenSize} from '../../screen'

export const Profile = () => {
	const imgUrl = new URL('/myImg.jpg', import.meta.url).href
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
		   <h2 className={s.age}>26 years old</h2>
		   
		   <img onClick={onZoom} src={imgUrl}
		        className={!zoom?s.pic:s.picZoom}/>
		 
        <section className={s.text}>
          I’m a developer who learned by building things out of curiosity. I don’t have a traditional background, but I’ve always been drawn to understanding how things work and trying to make something better out of it.
        </section>

        <section className={s.text}>
         I didn’t have the chance to follow a traditional university path, but I found my own way — through open resources, trial and error, and persistence.
         The web felt like a space where anyone could learn, create, and share. That’s what kept me going.   </section>

        <section className={s.text}>
          I’ve used Udemy, YouTube, ChatGPT along with other platforms and apps to teach myself everything I know. Over time, I’ve grown to love the simplicity of Arch Linux, the efficiency of the i3 window manager, and the challenge of figuring things out without hand-holding. 
        </section>

        <section className={s.text}>
          I am an experienced Linux user and full-stack JavaScript developer. I’m comfortable working across the stack — from designing APIs and handling authentication to building responsive frontends and managing deployment. 
        </section>

        <section className={s.text}>
          I’m motivated by ideas — not just mine, but other people’s too. I want to help turn good ideas into working products, and I care about the details that make things feel right. Whether it’s the structure of a page, the logic behind a form, or the clarity of a UI, I pay attention.
        </section>

        <section className={s.text}>
          I often turn to AI for advice — in coding, in architecture, and in moments of confusion. It's like working with a thinking partner who’s always available. I'm not afraid to ask questions or get help when I need it, and I use that to move forward faster and smarter.
        </section>

        <section className={s.text}>
          I’m looking for a place where I can contribute my best work, learn from others, and be part of something real. I don’t have all the answers, but I’m serious about the work and open to everything it can teach me.
        </section>

        <section className={s.text}>
          That’s the kind of future I want to help shape.
        </section>
	       
	     </div>
	 </>;
}
