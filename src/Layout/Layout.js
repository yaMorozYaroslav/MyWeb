import React from 'react';
import {Outlet, Link} from "react-router-dom";
import s from'./Layout.module.css';
import {useLocation} from "react-router-dom";
import sideCont from './welcomer.jpg'

import {useDispatch, useSelector} from 'react-redux'
import {nowIntro, nowProfile, nowProject, nowContacts} from '../Redux/openSlice'

export const Layout = () => {
	const location = useLocation();
	const {pathname} = location;
	const splitLocation = pathname.split("/")
	
	const dispatch = useDispatch()
	const selectContact = state => state.open.contact
	const selectNow = state => state.open.now
	const contact = useSelector(selectContact)
	const now = useSelector(selectNow)
	
	React.useEffect(()=>{
		if(splitLocation[1]==="") dispatch(nowIntro())
	   if(splitLocation[1]==="profile") dispatch(nowProfile()) 
	   if(splitLocation[1]==="project") dispatch(nowProject())
	   if(splitLocation[1]==="contacts")dispatch(nowContacts())
		},[location, dispatch, splitLocation])
	React.useEffect(()=>{
	    if(now === "profile") console.log(now)
		},[now, location])
	
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
		          <Linker text={"Project"} route={"/project"} location={"project"}/>
		     </button >
		     
		     <button className={splitLocation[1]==="contacts"?s.active:s.idle}>
		          <Linker text={"Contacts"} route={"/contacts"} location={"contacts"}/>
		     </button>
		     
		    </nav>
       <section className={s.double}>
		    
		        <div className={s.outlet}><Outlet /></div>
		     <img src={sideCont} alt='circle' className={s.sideCont} />
	   </section>
		   </>		        
           )
         };
