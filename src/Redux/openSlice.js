import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	alert: false, email: false, section: 'intro'
	}

export const openSlice = createSlice({
	   name: 'open',
	   initialState,
	   reducers: {
		   openAlert: state => {state.alert = true},
		   closeAlert: state => {state.alert = false},
		   openEmail: state => {state.email = true},
		   closeEmail: state => {state.email = false},
		   nowProfile: state => {state.section = 'profile'},
		   nowProject: state => {state.section = 'project'},
		   nowContacts: state => {state.section = 'contacts'},
		   nowIntro: state => {state.section = initialState.section}
		   }
	})
	export const {openAlert, closeAlert, openEmail, closeEmail,
		                         nowIntro,  nowProfile, nowProject, nowContacts} = openSlice.actions
	export default openSlice.reducer
