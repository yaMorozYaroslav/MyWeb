import React from 'react'
import s from './Header.module.css'

export const Header =()=> {
	    return ( <div className={s.header}>
	                          <div className={s.first}>
	                             <h1 className={s.text}>Development</h1>
	                             <div className={s.gear}><i className="fa fa-gear fa-3x"></i></div>
	                           </div>
	                           <div className={s.second} />
	                           </div>)
	              
	}
