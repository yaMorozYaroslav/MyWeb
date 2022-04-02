import {createSlice} from '@reduxjs/toolkit'

const initialState = [{id:"0",name:"Example"}]

const nodeSlc = createSlice({name: "nodes", 
	                         initialState, 
	            reducers:{added(state,action){state.push(action.payload)}}
	                       })

export const {added} = nodeSlc.actions
export default nodeSlc.reducer