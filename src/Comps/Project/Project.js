import React from 'react'
import s from './Project.module.css'

import {LgLaptopZoom,SmLaptop,TabletZoom,SmPhoneZoom,LgPhoneZoom} from './lenses.js'

export function Project(){
	function openCode(){ window.open('https://github.com/yaMorozYaroslav/ItemAuth')}
	function openApp(){window.open('https://thefunnyfair.netlify.app')}
	function openBack(){window.open('https://back-item.herokuapp.com/')}
	
	const laptop = window.innerWidth > 1250
	const tablet = window.innerWidth < 1250 && window.innerWidth > 650
	const lgPhone = window.innerWidth < 650 && window.innerWidth > 450
	const smPhone = window.innerWidth < 450
	console.log(window.innerWidth) 
    
	return (<>

	<div  className={s.container} >
        <div className={s.zoomCon}>  
         {laptop?<LgLaptopZoom/>:null}
         {tablet?<TabletZoom/>:null}
         {lgPhone?<LgPhoneZoom/>:null}
         {smPhone?<SmPhoneZoom/>:null}
        </div>
    
	<div className={s.descAndButs}>
	 <section className={s.description}>
	      This is one of my first full stack projects created half a year ago
	    using NodeJS, ExpressJS, MongoDB, React and Redux.
	      
	      There is a registration that allows you to store the name, 
	      email address and encrypted password in MongoDB for 
	      later use in token authentication. An authorized user can 
	      add items to the database and manage those that he added.
	   </section>
	<section className={s.buttons}>   
	   <button className={s.butt} onClick={openCode}>
	            <p className={s.butText}> Open Application Code on GitHub</p></button>
	   <button className={s.butt} onClick={openApp}>
	            <p className={s.butText}>Open Deployed Application on Netlify</p></button>
	   <button className={s.opener} onClick={openBack}>
	            <p className={s.butt}>Open Deployed Backend on Heroku</p></button>
   </section>
   </div>
	</div>
	</>)
	}
