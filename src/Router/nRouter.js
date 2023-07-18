import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Contacts} from '../Comps/Contacts/Contacts'
import {Profile} from '../Comps/Profile/Profile'
import {Project} from '../Comps/Project/Project'
import {Layout} from '../Layout/Layout'
import {Intro} from '../Comps/Intro/Intro'
import {GitHub, Netlify} from './links'

const router = createBrowserRouter([
            { path: '/',
			  element: <Layout/>,
			  children: [
            {
              path: "contacts",
              element: <Contacts />,
      },
    ],
	             }
       ])

export const Router =()=> {
	return(
	   <BrowserRouter>
	      <Routes>
	          <Route path="/" element={<Layout />}>
	                 <Route index element={<Intro />} />
	                 <Route path="profile" element={<Profile />} />
	                 <Route path="project" element={<Project />} />
	                 <Route path="contacts" element={<Contacts />} />
			  </Route>
			         <Route path="github" element={<GitHub />} />
			         <Route path="netlify" element={<Netlify />} />
			 </Routes>
		 </BrowserRouter>
	   )
	}
