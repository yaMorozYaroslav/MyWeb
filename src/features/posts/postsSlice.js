import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
	posts: [],
	status: 'idle',
	error: null
}


export const fetchPosts = createAsyncThunk(
	         'posts/fetchPosts', async()=>{
	         	const response = await axios.get('https://api.coinbase.com/v2/currencies')
	         	console.log(response.data.data)
	         	return response.data.data
	         })
const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded(state, action){
			state.posts.push(action.payload)
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
		  },
		  postUpdated(state, action){
		  	const {id, title, content} = action.payload
		  	const existingPost = state.posts.find(post=>post.id===id)
		  	if(existingPost){
		  		existingPost.title = title
		  		existingPost.content = content
		  	}
		  }
		},
		extraReducers(builder){
			builder
			    .addCase(fetchPosts.pending, (state, action)=>{
			    	state.status = 'loading'
			    })
			    .addCase(fetchPosts.fulfilled, (state, action)=>{
                    state.status = 'suceeded'
                    state.posts = state.posts.concat(action.payload)
			    })
			    .addCase(fetchPosts.rejected, (state,action)=>{
			    	state.status = 'failed'
			    	state.error = action.error.message
			    })
		}
	  
	})
  export const {postAdded,postUpdated} = postsSlice.actions
export default postsSlice.reducer

export const selectAllPosts = state => state.posts.posts

export const selectPostById = (
	state, postId) => state.posts.posts.find(post=>post.id===postId)