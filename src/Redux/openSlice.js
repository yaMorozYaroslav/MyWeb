import {createSlice} from '@reduxjs/toolkit'

export const openSlice = createSlice({
	   name: 'open',
	   initialState: {alert: false, contact: false},
	   reducers: {
		   openAlert: state => {state.alert = true},
		   closeAlert: state => {state.alert = false},
		   openContact: state => {state.contact = true},
		   closeContact: state => {state.contact = false}
		   }
	})
	export const {openAlert, closeAlert, openContact, closeContact} = openSlice.actions
	export default openSlice.reducer
