import React from 'react'
import s from './Project.module.css'
import itemImg from './itemImg.png'
export function Project(){
	return (<><div  className={s.container} >
	<img className={s.img} src={itemImg} alt="itemImg" />
	      This is one of my first full stack projects created half a year ago
	    using NodeJS, ExpressJS, MongoDB, React and Redux.
	      The application has stages of registration and authorization,
       after which the user is allowed to add items to the database
       and manage the ones he added.
	</div></>)
	}
