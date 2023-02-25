import {configureStore} from '@reduxjs/toolkit';

import openReducer from './openSlice'
import sizeReducer  from './sizeSlice'

export const setupStore = () => {
	return configureStore({
	reducer: { 
		open: openReducer,
		size: sizeReducer
		}
		})
	}
export default setupStore
