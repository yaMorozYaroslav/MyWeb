import {configureStore} from '@reduxjs/toolkit'

import openReducer from './openSlice'

export const store = configureStore({
	reducer: {
		      open: openReducer
		}
	})
