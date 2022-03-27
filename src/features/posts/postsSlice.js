import {createSlice} from '@reduxjs/toolkit';

const initialState = [
{id: '1', title: 'First', content: 'Hello'},
{id: '2', title: 'Second', content: 'Bye'}
]
const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {}
})
export default postsSlice.reducer