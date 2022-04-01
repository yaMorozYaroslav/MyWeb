import React from 'react'

import {BrowserRouter as Router, Routes,
                         Route, Navigate} from 'react-router-dom'

import {Panel} from './Panel'
import {PostsList} from './features/posts/PostsList'
import {Single} from './features/posts/Single'

export function App(){
  return(
    <div className="main">
 <Router>
   <Panel/>
    <div className="bodier">
     <Routes>
       <Route exact path="/" element={<PostsList/>}  />
       <Route exact path="/posts/:postId" element={<Single/>} />
            </Routes>
          </div>
        </Router>
      </div>
      )
      }