import {configureStore} from '@reduxjs/toolkit';

import openReducer from './openSlice'

export const setupStore = () => {
	return configureStore({
	reducer: { open: openReducer}
		})
	}
