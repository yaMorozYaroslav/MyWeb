import React from 'react'

import s from './Email.module.css'
import {Alert} from '../Alert/Alert'

import axios from 'axios'

export const Email = ({alertState, openAlert, closeAlert, closeMailForm}) => {
	
	//~ const [alertText, setAlertText] = React.useState()
	const [source, setSource] = React.useState({user_name:'', user_email:'',
		                                        user_phone:'', items:''})	
    const handChange = (e) => setSource({...source, 
		                               [e.target.name]: e.target.value})                                        
	 
	const [flash, setFlash] = React.useState(0)
	
	React.useEffect(()=>{
		const interval = setInterval(()=>{
			function changer(){if(flash===0){setFlash(1)
				              }else{setFlash(0)}}
			    changer()
			},1500)
			return () => clearInterval(interval)
		},[flash]) 
		
	const sendEmail = e => {
	   e.preventDefault()
	  axios.post('https://flora-store-ed448aa4183f.herokuapp.com/email',
		                                     source).then((response) =>{
              console.log(response.status, response.data)         
              openAlert()
              },
              error => {console.log(error);
                        alert(error.message)})
       
        
		}
 return(<>{alertState && <Alert closeAlert={closeAlert}/> } 

		  {!alertState && <section className={s.container}>
		 
	          <form onSubmit={sendEmail}>
	        
	             <label  className={s.label} htmlFor='user_name'>Name</label>
	             
	             <input className={s.input} onChange={handChange}
	                    type='text' placeholder='Name' 
	                    name='user_name' required/>
	                                        
	             <label  className={s.label} 
	                     htmlFor='Email'>Email</label>  
	                                
	             <input className={s.input} onChange={handChange}
	                    type='email' placeholder='Email'
	                    name='user_email' required/>
	                                        
	             <label className={s.label} 
	                    htmlFor='Phone'>Phone</label>
	                    
	             <input className={s.inputSub} onChange={handChange}
	                    type='text' placeholder='Phone' 
	                    name='user_phone' required />
	                    
	   	         <h1 className={s.subtit}>Message</h1> 
	   	          
	             <textarea className={s.textarea} onChange={handChange}
	                       name='items' cols='30' rows='5'></textarea>
	              <button className={s.button} 
	                      type='submit' onSubmit={openAlert}>
	                                                     Send</button>
	         </form>
	       <div>
	       
	         <button className={flash?s.closer:s.closer0}
	                 onClick={closeMailForm}
	                                      >X</button>
	         <h2 className={s.tit}>Contact Form</h2>
	       </div>
	     </section>} 
			</>
	                                        
	)}


