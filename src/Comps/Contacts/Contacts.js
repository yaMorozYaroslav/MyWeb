import React from 'react';
import styles from './Contacts.module.css';
import {Email} from '../Email/Email'
import {useDispatch, useSelector} from 'react-redux'

import {openEmail} from '../../Redux/openSlice'

export function Contacts(){
	
	const dispatch = useDispatch()
	
	const selectEmail = state => state.open.email
	const email = useSelector(selectEmail)
		
	const MyData = () =>{
		return (<>
		         <h1 className={styles.label}>Number</h1>
			      <p className={styles.discr}>+1 902 877 5222</p>
			      
			      <h1 className={styles.label}>Email</h1>
		          <p className={styles.discr}>ya.moroz.yaroslav@gmail.com</p>
		          
		          <h1 className={styles.label}>LinkedIn</h1>
                  <p className={styles.discr}>
                                                    linkedin.com/in/yaroslav-moroz-4556a8225/</p>
                     
                   <h1 className={styles.label}>GitHub</h1>
    	          <p className={styles.discr}>github.com/yaMorozYaroslav</p>
			      
			      <h1 className={styles.city}>NS, Dartmouth 2022</h1>
			      </>)};


 
 return(            
                            <div className={styles.can}>
                              {!email?<button onClick={()=>dispatch(openEmail())}>Click to email me</button>:null}
                                  {email?<div className={styles.sender}> <Email /></div>:<MyData />}
                               
                            </div>
    )
}
