import React from 'react'

import {BrowserRouter as Router, Routes,
                         Route, Navigate} from 'react-router-dom'

import {Panel} from './Panel'
import {PostsList} from './features/posts/PostsList'

export function App(){
  return(
 <Router>
   <Panel/>
    <div className="bodier">
     <Routes>
       <Route exact path="/" element={<PostsList/>}  />
            </Routes>
          </div>
        </Router>
      )
      }