import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit'
//import {client} from '../../api/client'

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async()=>{
    const response = await client.get('https://sv443.net/jokeapi/v2')
    return response.data
})



 const postsSlice = createSlice({
 	name: 'posts',
 	initialState,
 	reducers:{
        postAdded:{
            reducer(state, action){
                state.posts.push(action.payload)
            },
            prepare(title, content, userId){
                return{
                    payload:{
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId
                    }
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
            .addCase(fetchPosts.fullfilled, (state, action)=>{
                state.status = 'succeeded'

                state.posts = state.posts.concat(action.payload)
            })
            .addCase(fetchPosts.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
          }
       })
 export const {postAdded, postUpdated} = postsSlice.actions

 export default postsSlice.reducer

 export const selectAllPosts = state =>state.posts.posts

 export const selectPostById = (state, postId) =>
                    state.posts.posts.find(post=>post.id===postId)