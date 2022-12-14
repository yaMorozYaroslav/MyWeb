import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	alert: false, section: 'intro'
	}

export const openSlice = createSlice({
	   name: 'open',
	   initialState,
	   reducers: {
		   openAlert: state => {state.alert = true},
		   closeAlert: state => {state.alert = false},
		   nowProfile: state => {state.section = 'profile'},
		   nowProject: state => {state.section = 'project'},
		   nowContacts: state => {state.section = 'contacts'},
		   nowIntro: state => {state.section = initialState.section}
		   }
	})
	export const {openAlert, closeAlert, nowIntro, 
		                         nowProfile, nowProject, nowContacts} = openSlice.actions
	export default openSlice.reducer
