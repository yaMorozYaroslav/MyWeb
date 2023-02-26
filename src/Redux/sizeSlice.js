import {createSlice} from '@reduxjs/toolkit'

export const sizeSlice = createSlice({
	name: 'size',
	initialState: null,
	reducers: {
		mobiS: state => 'mobiS',
		mobiM: state => 'mobiM',
		mobiL: state => 'mobiL',
		tablet: state => 'tablet',
		laptS: state => 'laptS',
		laptM: state => 'laptM',
		laptL: state => 'laptL'
		}
	})
	export const {mobiS, mobiM, mobiL, tablet,
		                  laptS, laptM, laptL} = sizeSlice.actions
	
	export default sizeSlice.reducer
