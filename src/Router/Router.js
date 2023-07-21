import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import {Contacts} from '../Comps/Contacts/Contacts'
import {Profile} from '../Comps/Profile/Profile'
import {Project} from '../Comps/Project/Project'
import {Layout} from '../Layout/Layout'
import {Intro} from '../Comps/Intro/Intro'
import {OpenState} from '../Context/OpenState'

const router = createBrowserRouter([
            { path: '/',
			  element: <Layout/>,
			  children: [
            {
              path: "contacts",
              element: <Contacts />,
            },
            {
              index: "true",
              element: <Intro />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "project",
              element: <Project />,
            }
           
    ]},
	             
       ])

export const Router =()=> <OpenState><RouterProvider router={router} /></OpenState>
