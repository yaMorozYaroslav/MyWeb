import React from 'react'
import s from './Project.module.css'
import itemImg from './itemImg.jpg'
import picture from './picture.jpg'
//import ImageZoom from 'react-image-zoom'

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export function Project(){
	function openCode(){ window.open('https://github.com/yaMorozYaroslav/ItemAuth')}
	function openApp(){window.open('https://thefunnyfair.netlify.app')}
	function openBack(){window.open('https://back-item.herokuapp.com/')}
	
	const tablet = window.innerWidth < 863
    
    //<img className={tablet?s.img0:s.img} src={itemImg} alt="itemImg" />
	
	return (<>
	<TransformWrapper initialScale={1}
                      initialPositionX={300}
                      initialPositionY={700}>
    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
	<>
	<div className="tools">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
            </div>
	<TransformComponent><img className={s.img} src={picture} alt="oneItem" /></TransformComponent>
	</>
	)}
	</TransformWrapper>
	<div  className={s.container} >
	
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
	   <button className={s.opener} onClick={openCode}>
	            <p className={s.butText}> Open Application Code on GitHub</p></button>
	   <button className={s.opener} onClick={openApp}>
	            <p className={s.butText}>Open Deployed Application on Netlify</p></button>
	   <button className={s.opener} onClick={openBack}>
	            <p className={s.butText}>Open Deployed Backend on Heroku</p></button>
   </section>
   </div>
	</div>
	</>)
	}
