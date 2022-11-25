import React from 'react';
import {Outlet, Link} from "react-router-dom";
import s from'./Layout.module.css';
import {useLocation} from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux'
import {closeContact, openContact} from '../../Redux/openSlice'

export const Layout = () => {
	const location = useLocation();
	const {pathname} = location;
	const splitLocation = pathname.split("/")
	
	const dispatch = useDispatch()
	const selectContact = state => state.open.contact
	const contact = useSelector(selectContact)
	
	React.useEffect(()=>{
	   if(splitLocation[1]==="contacts") dispatch(openContact()) 
	   if(splitLocation[1]!=="contacts"&&!contact) dispatch(closeContact())
		},[location])
	React.useEffect(()=>{
	     console.log(contact)
	    //if(contact === true) console.log(contact)
		},[contact])
	return(
		<>
		  <nav className={s.nav}>
		  
		    <div className={s.div}>
		      <button className={splitLocation[1]===""?s.bud:s.but}>
		        <Link  to="/">Introduction </Link>
		      </button>
		      
		      <button className={splitLocation[1]==="profile"?s.bud:s.but}>
		        <Link to="/profile">Profile</Link>
		      </button>
		      
		       <button className={splitLocation[1]==="project"?s.bud:s.but}>
		          <Link  to="/project">Projects</Link>
		     </button >
		     
		     <button className={splitLocation[1]==="contacts"?s.bud:s.but}>
		          <Link  to="/contacts">Contacts</Link>
		     </button>
		      </div>
		     </nav>

		     <div className={s.outlet}><Outlet /></div>
		     <div className={s.layout}></div>
		     </>		        
           )
         };
