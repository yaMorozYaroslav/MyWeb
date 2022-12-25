import React from 'react';
import styles from './Contacts.module.css';
import {Email} from '../Email/Email'
import {useDispatch, useSelector} from 'react-redux'

import {openEmail, closeEmail} from '../../Redux/openSlice'

export function Contacts(){
	
	const dispatch = useDispatch()
	
	const selectEmail = state => state.open.email
	const email = useSelector(selectEmail)
	React.useEffect(()=>{
		console.log(email)
		},[email])
	const Number = () =>{
		return (<><h1 className={styles.label}>Number</h1>
			      <p className={styles.discr}>+1 902 877 5222</p></>)};

	const MyEmail = () =>{
		return (<><h1 className={styles.label}>Email</h1>
		          <p className={styles.discr}>ya.moroz.yaroslav@gmail.com</p></>)};

	const LinkedIn = () =>{
		   return ( <><h1 className={styles.label}>LinkedIn</h1>
                      <p className={styles.discr}>
                             linkedin.com/in/yaroslav-moroz-4556a8225/</p></>)};

    const GitHub = () =>{
    	return (<><h1 className={styles.label}>GitHub</h1>
    	          <p className={styles.dicr}>github.com/yaMorozYaroslav</p></>)};
    const City = () =>{
  return <h1 className={styles.city}>NS, Dartmouth 2022</h1>
    }
 
 return(<div className={styles.can}>
                               <Number/>
                               <MyEmail/>
                               <LinkedIn/>
                               <GitHub/>
                               <City/>
                               <button onClick={()=>dispatch(openEmail())}>Send</button>
                               {email?<Email/>:null}

        </div>)
}
