import React from 'react'

import s from './Email.module.css'
//import {Alert} from '../Alert/Alert'

import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import {useSelector, useDispatch} from 'react-redux'

import {openAlert, closeEmail} from '../../Redux/openSlice'

export const Email = () => {
	
	const dispatch = useDispatch()
	const selectAlert = state => state.open.alert
	const alert = useSelector(selectAlert)
	
	const form = useRef()
	
	const sendEmail = e => {
		e.preventDefault()
		
		emailjs.sendForm(
		'service_wzlecr5', 'template_hu92t85', form.current, 'LTwbosNcCwgaQan9I')
		.then((result) => {
			console.log(result.text)
			}, (error) => {
				console.log(error.text)
				})
				e.target.reset()
	}
	 //{alert? <Alert /> : null}
	return(
	<section className={s.container}>
	      <button onClick={()=>dispatch(closeEmail())}>X</button>
	      <div className={s.contForm}>
	        <h2>Contact me</h2>
	        <form ref={form} onSubmit={sendEmail}>
	             <input className={s.input}
	                                         type='text' placeholder='FullName' name='user' required/>
	             <input className={s.input}
	                                         type='email' placeholder='Email' name='userEmail' required/>
	             <input className={s.input} 
	                                         type='text' placeholder='Subject' name='subject' required />
	             <textarea className={s.textarea}
	                                         name='message' cols='30' rows='5'></textarea>
	              <button className={s.button} type='submit' onClick={()=>dispatch(openAlert())}>
	              Send Message</button>
	         </form>
	       </div>
	      
	     </section>                                         
	)	
}


