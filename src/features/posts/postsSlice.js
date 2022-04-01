import {createSlice, nanoid} from '@reduxjs/toolkit'
import {sub} from 'date-fns'

const initialState=[]


const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded(state, action){
			state.push(action.payload)
		},
		prepare(title, content, userId){
			return{
				payload: {
					id: nanoid(),
					date: new Date().toISOString(),
					title,
					content,
					user: userId
			   }
			}
		 }
	  }
	})
  export const {postAdded} = postsSlice.actions
export default postsSlice.reducer
