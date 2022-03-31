import React from 'react'

import {BrowserRouter as Router, 
        Switch, Route, Redirect} from 'react-router-dom'

import {Panel} from './Panel'

export function App(){
  return(
 <Router>
   <Panel/>
    <div className="App">
     <Switch>
       <Route
          exact
            path="/"
            render={()=>(
         <React.Fragment>
          <AddPostForm/>
          <PostsList/>
         </React.Fragment>
              )}
              />
              <Route exact path="/posts/:postId" component={SinglePostPage}/>
              <Route exact path="/editPost/:postId" component={EditPostForm}/>
              <Redirect to="/"/>
            </Switch>
          </div>
        </Router>
      )
      }