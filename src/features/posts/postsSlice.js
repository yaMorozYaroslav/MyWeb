import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit'
import {client} from '../../api/client'

const initialState = {
    slices: [],
    status: 'idle',
    error: null
}
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async()=>{
    const response = await client.get('/fakeApi/posts')
    return response.data
})



 const postsSlice = createSlice({
 	name: 'posts',
 	initialState,
 	reducers:{
        postAdded:{
            reducer(state, action){
                state.slices.push(action.payload)
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
            const existingPost = state.slices.find(post=>post.id===id)
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

                state.slices = state.slices.concat(action.payload)
            })
            .addCase(fetchPosts.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
          }
       })
 export const {postAdded, postUpdated} = postsSlice.actions

 export default postsSlice.reducer

 export const selectAllPosts = state =>state.slices.slices

 export const selectPostById = (state, postId) =>
                    state.slices.slices.find(post=>post.id===postId)