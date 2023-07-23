import React from 'react'
import s from'./Layout.module.css'
import {Outlet, Link} from "react-router-dom"
import {useLocation} from "react-router-dom"

import {OpenContext} from '../Context/OpenState'


export function Layout(){
	
	const {section} = React.useContext(OpenContext)
	console.log(section)
	const location = useLocation();
	const {pathname} = location;
	const splitLocation = pathname.split("/")
	const {nowIntro, nowProfile, nowProject, nowContacts} = React.useContext(OpenContext)
	
	React.useEffect(()=>{
		if(splitLocation[1]===""&&section !== 'intro') nowIntro()
	   if(splitLocation[1]==="profile"&&section !== 'profile') nowProfile()
	   if(splitLocation[1]==="project"&&section !== 'project') nowProject()
	   if(splitLocation[1]==="contacts"&&section !== 'contacts') nowContacts()
		},[splitLocation, section, nowProject, nowIntro, nowContacts, nowProfile])
	
	const Linker =({text, route,location})=>
	
	 <Link className={splitLocation[1]===location?s.alink:s.link}
	                                     to={route} >{text}</Link>	
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
