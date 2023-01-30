import '@testing-library/jest-dom'
import {setupStore} from './store'
import openReducer, {openAlert, closeAlert} from './openSlice'

const store = setupStore()
const actual = store.getState().open

test('should return the expected initial state', () => {
	const expected = {alert: false, email: false, section: 'intro'}
	expect(actual).toEqual(expected)
	})
test('should change the action value on dispatch',() => {
	const expected = {alert: true}
	store.dispatch(openAlert())
	const newActual = actual
	expect(newActual).toBeInTheDocument(expected)
	
	})
