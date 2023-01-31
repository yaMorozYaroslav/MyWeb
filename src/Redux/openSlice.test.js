import '@testing-library/jest-dom'
import {setupStore} from './store'
import openReducer, {openAlert, closeAlert} from './openSlice'

const store = setupStore()

test('should return the expected initial state', () => {
	const expected = {alert: false, email: false, section: 'intro'}
	const actual = store.getState().open
	expect(actual).toEqual(expected)
	})
test('should change the alarm value to true',() => {
	const expected = {alert: true}
	store.dispatch(openAlert())
	const actual = store.getState().open.alert
	expect(actual).toBe(true)
	})
test('should change the alarm value to false',() => {
	const expected = {alert: true}
	store.dispatch(closeAlert())
	const actual = store.getState().open
	expect(actual).toEqual(expect.objectContaining(expected))
	})
//test('should change the email value to true
