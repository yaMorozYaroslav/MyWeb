import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Panel} from './Panel'
import {PostsList} from './features/posts/PostsList'

export function App(){
  return(
 <Router>
   <Panel/>
    <div className="App">
     <Routes>
       <Route
          exact
            path="/"
            render={()=>(
         <React.Fragment>
          <PostsList/>
         </React.Fragment>
              )}
              />
            </Routes>
          </div>
        </Router>
      )
      }