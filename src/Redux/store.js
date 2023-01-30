import {configureStore} from '@reduxjs/toolkit';

import openReducer from './openSlice'

export const store = preloadedState => {
	return configureStore({
	reducer: { open: openReducer, preloadedState})
		
	 })
   }
