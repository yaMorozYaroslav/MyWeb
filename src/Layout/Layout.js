import React from 'react';
import {Outlet, Link} from "react-router-dom";
import s from'./Layout.module.css';
import {useLocation} from "react-router-dom";
import sideCont from './sidePic.jpg'

import {useDispatch, useSelector} from 'react-redux'
import {closeContact, openContact} from '../Redux/openSlice'

export const Layout = () => {
	const location = useLocation();
	const {pathname} = location;
	const splitLocation = pathname.split("/")
	
	const dispatch = useDispatch()
	const selectContact = state => state.open.contact
	const contact = useSelector(selectContact)
	
	React.useEffect(()=>{
	   if(splitLocation[1]==="contacts") dispatch(openContact()) 
	   if(splitLocation[1]!=="contacts" && !contact) dispatch(closeContact())
		},[location, contact, dispatch, splitLocation])
	React.useEffect(()=>{
	     console.log(contact)
	    //if(contact === true) console.log(contact)
		},[contact])
	
	const Linker =({text, route,location})=>
	 <Link className={splitLocation[1]===location?s.alink:s.link} to={route} >{text}</Link>
	
	return(
		<>
		  <nav className={s.nav}>
		  
		      <button className={splitLocation[1]===""?s.active:s.idle}>
		        <Linker text={"Intro"} route={"/"} location={""}/>
		      </button>
		      
		      <button className={splitLocation[1]==="profile"?s.active:s.idle}>
		        		        <Linker text={"Profile"} route={"/profile"} location={"profile"}/>
		      </button>
		      
		       <button className={splitLocation[1]==="project"?s.active:s.idle}>
		          <Link className={s.link} to="/project">Projects</Link>
		     </button >
		     
		     <button className={splitLocation[1]==="contacts"?s.active:s.idle}>
		          <Link className={s.link}  to="/contacts">Contacts</Link>
		     </button>
		     
		    </nav>
       <section className={s.double}>
		     <div className={s.sheet}>
		        <div className={s.outlet}><Outlet /></div>
		     </div>
		     <img src={sideCont} alt='circle' className={s.sideCont} />
	   </section>
		   </>		        
           )
         };
