import React from 'react'
import {BrowseRouter, Routes, Route} from 'react-router-dom'
/*
 import {Contacts} from './comps/Contacts/Contacts'
import {Profile} from './opts/Profile/Profile'
import {Project} from './opts/Project/Project'
import {Layout} from './opts/Layout/Layout'
import {Intro} from './ops/Intro/Intro'
import {GitHub, Netlify} from './links'
*/
export const Router =()=> {
	return(
	   <BrowserRouter>
	      <Routes>
	          <Route path="/" element={<Layout />}>
	                 <Route index element={<Intro />} />
	                 <Route path="profile" element={<Profile />} />
	                 <Route path="project" element={<Project />} />
	                 <Route path="contacts" element={<Contacts /> />
			  </Route>
			         <Route path="github" element={<GitHub />} />
			         <Route path="netlify" element={<Netlify />} />
			 </Routes>
		 </BrowserRouter>
	   )
	}
