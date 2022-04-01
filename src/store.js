import {configureStore} from '@reduxjs/toolkit'
import postsReducer from './features/posts/postsSlice'
import nodesReducer from './features/node/nodeSlc'

export default configureStore({
	                           reducer:{
	                           	   posts: postsReducer,
	                           	   nodes: nodesReducer
	                                     }
                                         })