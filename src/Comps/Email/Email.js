import React from 'react'

import s from './Email.module.css';
import {Alert} from '../Alert/Alert'

import {useRef} from 'react';
import emailjs from '@emailjs/browser'
import {useSelector, useDispatch} from 'react-redux'

import {openAlert, closeEmail} from '../../Redux/openSlice'

export const Email = () => {
	
	const Form =() => {
		
	var [flash, setFlash] = React.useState(0)
	
	React.useEffect(()=>{
		const interval = setInterval(()=>{
			function changer(){if(flash===0){setFlash(1)}else{setFlash(0)}}
			changer()
			},1500)
			return () => clearInterval(interval)
		},[flash]) 
		return(
			<section className={s.container}>
	        <form ref={form} name='form' onSubmit={sendEmail}>
	             <label  className={s.label} htmlFor='Name'>Name</label>
	             <input className={s.input}
	                                         type='text' placeholder='Name' name='user_name'  required/>
	              <label  className={s.label} htmlFor='Email'>Email</label>
	             <input className={s.input}
	                                         type='email' placeholder='Email' name='user_email' required/>
	             <label  className={s.label} htmlFor='Subject'>Subject</label>
	             <input className={s.inputSub} 
	                                         type='text' placeholder='Subject' name='subject' required />
	   	             <h1 className={s.subtit}>Message</h1>  
	             <textarea className={s.textarea}
	                                         name='message' cols='30' rows='5'></textarea>
	              <button className={s.button} type='submit' onSubmit={()=>dispatch(openAlert())}  >
	              Send</button>
	         </form>
	       <div>
	         <button className={flash?s.closer:s.closer0} onClick={()=>dispatch(closeEmail())}>X</button>
	         <h2 className={s.tit}>Contact Form</h2>
	       </div>
	     </section> 
			)
		}
		
	const dispatch = useDispatch()
	const selectAlert = state => state.open.alert
	const alert = useSelector(selectAlert)
	
	const form = useRef()
	
	const sendEmail = e => {
		e.preventDefault()
		
		emailjs.sendForm(
		'service_wzlecr5', 'template_hu92t85', form.current, 'LTwbosNcCwgaQan9I')
		.then((result) => {
			//console.log(result.text)
			dispatch(openAlert())
			}, (error) => {
				console.log(error.text)
				})
				e.target.reset()
	}
	return(<>{alert? <Alert /> : <Form/>}</>
	                                        
	)	
}


