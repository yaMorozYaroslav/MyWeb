import React from 'react';
import s from'./Layout.module.css';
import {Outlet, Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux'
import {nowIntro, nowProfile, nowProject, nowContacts} from '../Redux/openSlice'

export function Layout(){
	const location = useLocation();
	const {pathname} = location;
	const splitLocation = pathname.split("/")
	
	const dispatch = useDispatch()
	
	const selectSection = state => state.open.section
	const section = useSelector(selectSection)
	
	React.useEffect(()=>{
		if(splitLocation[1]==="") dispatch(nowIntro())
	   if(splitLocation[1]==="profile") dispatch(nowProfile()) 
	   if(splitLocation[1]==="project") dispatch(nowProject())
	   if(splitLocation[1]==="contacts")dispatch(nowContacts())
		},[location, dispatch, splitLocation])
	/*React.useEffect(()=>{
	    if( section!==null) console.log(section)
		},[section])*/
	
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
	   </section>
		   </>		        
           )
         };
