import React from 'react'
import {BrowseRouter, Routes, Route} from 'react-router-dom'
/*
 import {Contacts} from './opts/Contacts/Contacts'
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
	)
	}
