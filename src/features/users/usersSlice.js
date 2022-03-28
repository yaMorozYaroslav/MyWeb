import {createSlice} from '@reduxjs/toolkit'

const initalState = [
   {id: '0', name: 'Tianna'},
   {id: '1', name: 'Kevin'},
   {id: '2', name: 'Madison Price'}
]
const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {}
})
export default usersSlice.reducer