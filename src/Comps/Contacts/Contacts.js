import React from 'react';
import styles from './Contacts.module.css';
import {Email} from '../Email/Email'
import {useDispatch, useSelector} from 'react-redux'
import {OpenContext} from '../../Context/OpenState'
import {openEmail} from '../../Redux/openSlice'

export function Contacts(){
	const {alert, mailForm,openAlert, closeAlert,
		    openMailForm, closeMailForm} = React.useContext(OpenContext)
    //if(!mailForm)openMailForm()	
	//console.log(mailForm)
	//const dispatch = useDispatch()
	
	//const selectEmail = state => state.open.email
	//const email = useSelector(selectEmail)
		
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
			      
			      <h1 className={styles.city}>NS, Dartmouth</h1>
			      </>)};


 
 return(            
                            <div className={styles.can}>
                            
                              {!mailForm?
								  <button className={styles.clicker} onClick={openMailForm}>
								                                         Click to email me</button>:null}
								                                                                                            
                                  {mailForm?<div ><Email  alert={alert} openAlert={openAlert} closeMailForm={closeMailForm} /></div>:<MyData />}
                               
                            </div>
    )
}
