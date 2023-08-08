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
	built using NodeJS, ExpressJS, MongoDB and React 
	which was designed to showcase my current
	                        coding skills and style.</section>
	    
	 <section className={s.text}> 
	   The app already has most of the features I was looking for,
	    including a shopping cart that the user can email me, 
	    basic login, managing items within user permissions,
	                         and filtering the product list.   </section>
	       
	 <section className={s.text}> 
	  I wanna add that it is still
	  in development to eventually become a full fledged ecommerce site.
	              </section>
	      
	 <section className={s.text}> 
	      In the future, I plan to implement the concept in NextJS,
        because "create-react-app" is deprecated.                    </section>
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
