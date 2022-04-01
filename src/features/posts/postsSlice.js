import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from '@reduxjs/toolkit'

const initialState = [{id: '1', title: 'text', content: 'something'}]
const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded(state, action){
			state.push(action.payload)
		},
		preapare(title, content){
			return{
				payload: {
					id: nanoid(),
					title,
					content
			   }
			}
		 }
	  }
	})
  export const {postAdded} = postsSlice.actions
export default postsSlice.reducer
