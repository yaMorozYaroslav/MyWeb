import React from 'react'
import s from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export const Header =()=> {
	    return ( <div className={s.header}>
	    
	                          <div className={s.first}>
	                             <h1 className={s.text}>Development</h1>
	                             <div className={s.gear}>Text<i className = 'fa-solid fa-gears fa-3x'></i></div>
	                             <FontAwesomeIcon icon={faGear}/>
	                           </div>
	                           <div className={s.second} />
	                           </div>)
	              
	}
