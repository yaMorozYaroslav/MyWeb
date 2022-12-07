import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	alert: false, contact: false, now: 'intro'
	}

export const openSlice = createSlice({
	   name: 'open',
	   initialState,
	   reducers: {
		   openAlert: state => {state.alert = true},
		   closeAlert: state => {state.alert = false},
		   openContact: state => {state.contact = true},
		   closeContact: state => {state.contact = false},
		   nowProfile: state => {state.profile = 'profile'},
		   nowProject: state => {state.now = 'project'},
		   nowContacts: state => {state.now = 'contacts'},
		   nowReset: state => {state.now = initialState.now}
		   }
	})
	export const {openAlert, closeAlert, openContact, closeContact} = openSlice.actions
	export default openSlice.reducer
