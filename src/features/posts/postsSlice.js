import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState=[]


const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded(state, action){
			state.push(action.payload)
		},
		prepare(title, content, userId, reactions){
			return{
				payload: {
					id: nanoid(),
					title,
					content,
					user: userId,
					reactions: {prosent: 0, baks: 0, jail: 0, dog: 0}
			   }
			}

		  },
		  reactionAdded(state, action){
		  	const {postId, reaction} = action.payload
		  	const existingPost = state.find(post=>post.id===postId)
		  	if(existingPost){
		  		existingPost.reactions[reaction]++
		  	}
		  }
		}
	  
	})
  export const {postAdded, reactionAdded} = postsSlice.actions
export default postsSlice.reducer
