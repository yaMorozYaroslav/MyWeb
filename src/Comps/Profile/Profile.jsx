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
  I’m a developer shaped by curiosity and practice — building projects, solving problems,
  and learning how technology fits together. My path has been self-directed, guided by
  persistence and a genuine interest in understanding how things work.
</section>

<section className={s.text}>
  Much of what shaped me comes from open resources and continuous experimentation.
  I see the web as a place where anyone can learn, create, and share what they build.
</section>

<section className={s.text}>
  My learning has been fueled by Udemy, YouTube, ChatGPT, and other platforms,
  forming a practical and flexible approach to growth. I enjoy using Arch Linux
  and the i3 window manager for their efficiency and simplicity.
</section>

<section className={s.text}>
  I work across the full JavaScript stack — building APIs, managing authentication,
  designing responsive interfaces, and deploying applications in Linux environments.
</section>

<section className={s.text}>
  Attention to clarity, structure, and detail helps me create web experiences that
  are both reliable and enjoyable to use.
</section>

<section className={s.text}>
  AI tools often assist me in refining ideas, testing assumptions, and improving
  development speed and consistency.
</section>

<section className={s.text}>
  My goal is to keep growing as a developer, collaborate with others,
  and contribute to projects that bring real value.
</section>

<section className={s.text}>
  The future I want to help shape is one where technology stays open, accessible,
  and constantly improving — making everyday life simpler and more connected.
</section>

	     </div>
	 </>;
}
