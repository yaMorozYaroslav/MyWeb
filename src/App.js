import React from 'react'
import {BrowserRouter as Router, Routes,
                         Route, Navigate} from 'react-router-dom'
import {PostsList} from './features/posts/PostsList'
import {Panel} from './Panel'
import {Single} from './features/posts/Single'
import {EditPost} from './features/posts/EditPost'

export function App(){
  return(
    <div className="main">
 <Router>
   <Panel/>
    <div className="bodier">
     <Routes>
       <Route exact path="/" element={<PostsList/>}  />
       <Route exact path="/posts/:postId" element={<Single/>} />
       <Route exact path="editPost/:postId" element={<EditPost/>} />
            </Routes>
          </div>
        </Router>
      </div>
      )
      }