import {configureStore} from '@reduxjs/toolkit'
import nodesReducer from './features/node/nodeSlc'

export default configureStore({
	                           reducer:{
	                       
	                           	   nodes: nodesReducer
	                                     }
                                         })