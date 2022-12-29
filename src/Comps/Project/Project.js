import React from 'react'
import s from './Project.module.css'
import itemImg from './itemImg.jpg'
import picture from './picture.jpg'

export function Project(){
	function opener (){ window.open('https://play.google.com')}
	return (<>
	
	<div  className={s.container} >
	
	<img className={s.img} src={itemImg} alt="itemImg" />
	<img className={s.img} src={picture} alt="oneItem" />
	
	 <section className={s.text}>
	      This is one of my first full stack projects created half a year ago
	    using NodeJS, ExpressJS, MongoDB, React and Redux.
	      
	      There is a registration that allows you to store the name, 
	      email address and encrypted password in MongoDB for 
	      later use in token authentication. An authorized user can 
	      add items to the database and manage those that he added.
	   </section>
	   <button onClick={opener}>open</button>
	   
	</div>
	</>)
	}
