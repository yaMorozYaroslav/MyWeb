import React from 'react';
import styles from './Contacts.module.css';
import {Email} from '../Email/Email'
import {OpenContext} from '../../Context/OpenState'

export function Contacts(){
	
	const {alert, mailForm, openAlert, closeAlert,
		    openMailForm, closeMailForm} = React.useContext(OpenContext)
    function openCode(){ window.open('https://github.com/yaMorozYaroslav/MyWeb')}
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
			      <button className={styles.link} onClick={openCode}>
			      Link To Source Code</button>
			      </>)};


 
 return(            
                            <div className={styles.can}>
                            
                              {!mailForm?
								  <button className={styles.clicker} onClick={openMailForm}>
								                                         Click to email me</button>:null}
								                                                                                            
                                  {mailForm?<div ><Email  alert={alert} 
									                      openAlert={openAlert} 
									                      closeAlert={closeAlert} 
									                      closeMailForm={closeMailForm} /></div>:<MyData />}
                               
                            </div>
    )
}
