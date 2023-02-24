import {createSlice} from '@reduxjs/toolkit'

export const sizeSlice = createSlice({
	name: 'size',
	state: null,
	reducers: {
		mobileL: state => {state = 'mobileL'} 
		}
	})
	export const {mobileL} = sizeSlice.actions
	
	export default sizeSlice.reducer
