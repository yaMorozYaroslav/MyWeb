import {createSlice} from '@reduxjs/toolkit'

const initialState = [{id: '1', title: 'text', content: 'something'}]
const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {}
	})
export default postsSlice.reducer
