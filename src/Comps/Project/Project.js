import React from 'react'
import s from './Project.module.css'
import itemImg from './itemImg.jpg'
import picture from './picture.jpg'

export function Project(){
	function openCode(){ window.open('https://github.com/yaMorozYaroslav/ItemAuth')}
	function openApp(){window.open('https://thefunnyfair.netlify.app')}
	function openBack(){window.open('https://back-item.herokuapp.com/')}
	
	const tablet = window.innerWidth < 863

	return (<>
	
	<div  className={s.container} >
	
	<img className={tablet?s.img0:s.img} src={itemImg} alt="itemImg" />
	<img className={s.img} src={picture} alt="oneItem" />
	<div className={s.descAndButs}>
	 <section className={s.text}>
	      This is one of my first full stack projects created half a year ago
	    using NodeJS, ExpressJS, MongoDB, React and Redux.
	      
	      There is a registration that allows you to store the name, 
	      email address and encrypted password in MongoDB for 
	      later use in token authentication. An authorized user can 
	      add items to the database and manage those that he added.
	   </section>
	<section className={s.buttons}>   
	   <button className={s.opener} onClick={openCode}>Open Application Code on GitHub</button>
	   <button className={s.opener} onClick={openApp}>Open Deployed Application on Netlify</button>
	   <button className={s.opener} onClick={openBack}>Open Deployed Backend on Heroku</button>
   </section>
   </div>
	</div>
	</>)
	}
