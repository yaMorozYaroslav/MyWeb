import {configureStore} from '@reduxjs/toolkit';

import openReducer from './openSlice'

export const store = () => {
	return configureStore({
	reducer: { open: openReducer}
	 })
   }
		
	 
