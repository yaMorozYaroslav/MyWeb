import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	alert: false, now: 'intro'
	}

export const openSlice = createSlice({
	   name: 'open',
	   initialState,
	   reducers: {
		   openAlert: state => {state.alert = true},
		   closeAlert: state => {state.alert = false},
		   nowProfile: state => {state.now = 'profile'},
		   nowProject: state => {state.now = 'project'},
		   nowContacts: state => {state.now = 'contacts'},
		   nowIntro: state => {state.now = initialState.now}
		   }
	})
	export const {openAlert, closeAlert, nowIntro, 
		                         nowProfile, nowProject, nowContacts} = openSlice.actions
	export default openSlice.reducer
