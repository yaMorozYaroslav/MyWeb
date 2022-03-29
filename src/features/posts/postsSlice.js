import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: "1", title: "Name", content: "Something inside"}
 ]
 const postsSlice = createSlice({
 	name: 'posts',
 	initialState,
 	reducers:{}
 })

 export default postsSlice.reducer