import React from 'react';
import styles from './Contacts.module.css';
//import element from './element.png';


export function Contacts(){
	
	const Number = () =>{
		return (<><h1 className={styles.label}>Number</h1>
			      <p className={styles.discr}>+1 902 877 5222</p></>)};

	const Email = () =>{
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
  /*  const Element = () => {
    	return <img src={element} alt="some"
    	        className={styles.element}/>
    }
     */

 return(<div className={styles.can}>
                               <Number/>
                               <Email/>
                               <LinkedIn/>
                               <GitHub/>
                               <City/>

        </div>)
}
