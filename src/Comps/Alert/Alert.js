import React from 'react'
import {closeAlert, closeEmail} from '../../Redux/openSlice'
import {useDispatch} from 'react-redux'
import s from './Alert.module.css'

export const Alert = () => {
	const dispatch = useDispatch()
	const double =()=> {
		dispatch(closeAlert())
		dispatch(closeEmail())
		}
	return(
	<section className={s.container}>
	<h1 className={s.message}>You have sent<br/> the message.</h1>
	<button className={s.button} onClick={double}>Close</button>
	</section>
	)
	}
