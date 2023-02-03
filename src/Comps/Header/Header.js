import React from 'react'
import s from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export const Header =()=> {
	    return ( <div className={s.header}>
	    
	                          <div className={s.first}>
	                             <h1 className={s.text}>Development</h1>
	                             <FontAwesomeIcon className={s.gear} icon={faGear}/>
	                           </div>
	                           
	                           <div className={s.second} />
	                           <h1>{window.innerWidth > 300?'+300':'-300'}</h1>
	                     </div>)
	              
	}
