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
  I’m a developer shaped by curiosity and practice, learning by building and exploring how things work. The path hasn’t been traditional, but persistence and hands-on experience kept me moving forward.
</section>

<section className={s.text}>
  My knowledge comes from open resources, trial and error, and the belief that the web is a space where anyone can learn, create, and share.
</section>

<section className={s.text}>
  I’ve taught myself through Udemy, YouTube, ChatGPT and other platforms, while developing a preference for the simplicity of Arch Linux and the efficiency of the i3 window manager.
</section>

<section className={s.text}>
  As an experienced Linux user and full-stack JavaScript developer, I work across the stack from APIs and authentication to responsive frontends and deployment.
</section>

<section className={s.text}>
  Motivation comes from ideas — with close attention to the details that make products work, from page structure and form logic to UI clarity.
</section>

<section className={s.text}>
  I often treat AI as a thinking partner in coding, architecture, and decision-making, using it to move forward faster and smarter.
</section>

<section className={s.text}>
  My goal is to contribute meaningful work, grow with others, and build real products while staying serious about the craft and open to learning.
</section>

<section className={s.text}>
  The future I want to help shape is one where the availability of information on the internet, the simplicity that technology brings to daily routines, and the constant possibilities for improvement and upgrades are embraced and expanded.
</section>

	       
	     </div>
	 </>;
}
