
import {createSlice} from '@reduxjs/toolkit'

const initialState = [
  {id: "0", title: "eyes", content: "tits"}
]

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers:{}
})

export default postsSlice.reducer
