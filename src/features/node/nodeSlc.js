import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = [{id:"0",text:"Example"}]

const nodeSlc = createSlice({name: "nodes", 
	                         initialState, 
	            reducers:{added(state,action){state.push(action.payload)},
	                      prepare(text){return{payload:{id: nanoid, text}}}}
	                       })

export const {added} = nodeSlc.actions
export default nodeSlc.reducer