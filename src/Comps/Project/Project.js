import React from 'react'
import s from './Project.module.css'

import {LgLaptopZoom,MdLaptopZoom,TabletZoom,
	                 SmPhoneZoom,LgPhoneZoom} from './lenses/lenses.js'
import {ScreenSize} from '../../screen'

export function Project(){
	function openCode(){ window.open('https://github.com/yaMorozYaroslav/ProClient')}
	function openApp(){window.open('https://flora-izyum.vercel.app')}
	function openBack(){window.open('https://flora-store-ed448aa4183f.herokuapp.com')}
	const screen = ScreenSize()
	//console.log(screen)
    
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
	 <h2 className={s.descTitle}>Description</h2>
	 <section className={s.text}>
	       This is my full stack 
	      project built with NextJS, ExpressJS and MongoDB. </section>
	
	 <section className={s.text}> 
	   The app already has most of the features I was looking for,
	including a shopping cart that the user can email me, 
	basic login, managing items within user permissions,
	                      and filtering. </section>
	       
 <section className={s.text}> 
       In the future, I plan to optimize it for search engines,
    expand user actions, enable account settings and credit card payments.
	              </section>
 <section className={s.text}> 
      Another idea is to develop tests to determine which product
     the user needs in each case, since gardening requires precision.
	              </section>
	      
  <section className={s.text}> 
	                     </section>
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
	            <p className={s.butText}>Open Application on Vercel</p></button>
	   <button className={s.butt} onClick={openBack}>
	            <p className={s.butText}>Open Backend on Heroku</p></button>
   </section>
   </div>
	</div>
	</>)
	}
