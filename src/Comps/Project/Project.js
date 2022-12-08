import React from 'react'
import s from './Project.module.css'
import itemImg from './itemImg.png'
export function Project(){
	return (<><div  className={s.container} >
	<img className={s.img} src={itemImg} alt="itemImg" />
	      This is one of my first full stack projects created half a year ago
	    using NodeJS, ExpressJS, MongoDB, React and Redux.
	      
	      There is a registration that allows you to store the name, 
	      email address and encrypted password in MongoDB for 
	      later use in token authentication. An authorized user can 
	      add items to the database and manage those that he added.
	</div></>)
	}
