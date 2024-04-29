import React from 'react'
import s from './Alert.module.css'

export const Alert = ({closeAlert}) => {
		
	return(
	<section className={s.container}>
	<h1 className={s.message}>You have sent<br/> the message.</h1>
	<button className={s.button} onClick={closeAlert}>Close</button>
	</section>
	)
	}
