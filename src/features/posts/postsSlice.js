import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState=[]


const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded:{
			reducer(state, action){
			state.push(action.payload)
		},
		prepare(title, content, userId){
			return{
				payload: {
					id: nanoid(),
					
					title,
					content,
					user: userId
			   }
			}
		  }
		}
	  }
	})
  export const {postAdded} = postsSlice.actions
export default postsSlice.reducer
