import React from 'react'
import s from './Project.module.css'

import {LgLaptopZoom,MdLaptopZoom,TabletZoom,
	                 SmPhoneZoom,LgPhoneZoom} from './lenses/lenses.js'
import {ScreenSize} from '../../screen'

export function Project(){
	function openCode(){ window.open('https://github.com/yaMorozYaroslav/ItemAuth')}
	function openApp(){window.open('https://the-funny-fair.netlify.app')}
	function openBack(){window.open('https://item-auth-back-0555af6b9518.herokuapp.com')}
	const screen = ScreenSize()
	console.log(screen)
    
	return (<>

	<div  className={s.container} >
        <div className={s.zoomCon}>  
         {screen.lapXL?<LgLaptopZoom/>:null}
         {screen.lapM||screen.lapL?<MdLaptopZoom/>:null}
         {screen.lapS?<TabletZoom/>:null}
         {screen.mobL?<LgPhoneZoom/>:null}
         {screen.mobS||screen.mobM?<SmPhoneZoom/>:null}
        </div>
    
  <div className={s.descAndButs}>
	<div className={s.description}>
	 <h2 style={{marginBottom:'18px'}}>Description</h2>
	 <section className={s.text}>
	       This is the latest version of my full stack project
	      built using NodeJS, ExpressJS, MongoDB and React.</section>
	    
	 <section className={s.text}>   
	      There is a registration that allows you to store the name, 
	      email address and encrypted password in MongoDB for 
	      later use in token authentication.              </section>
	       
	 <section className={s.text}> 
	      An authorized user can add items to the database and 
	      manage those that he added.                     </section>
	 </div>
	 
	<section className={s.buttons}> 
	 <ul className={s.features}>
	  <h3>Available features</h3>
	   <li>Token Authentication</li>
	   <li>Role-Based Authorization</li>
	   <li>Instant Contact Form</li>
	   <li>Copyrighted Web Design</li>
	 </ul>
	  
	   <button className={s.butt} onClick={openCode}>
	            <p className={s.butText}> Open Code on GitHub</p></button>
	   <button className={s.butt} onClick={openApp}>
	            <p className={s.butText}>Open Application on Netlify</p></button>
	   <button className={s.butt} onClick={openBack}>
	            <p className={s.butText}>Open Backend on Heroku</p></button>
   </section>
   </div>
	</div>
	</>)
	}
