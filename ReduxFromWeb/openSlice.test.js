import '@testing-library/jest-dom'
import {setupStore} from './store'
import openReducer, {openAlert, closeAlert, openEmail, closeEmail,
	                 nowIntro,  nowProfile, nowProject, nowContacts} from './openSlice'

const store = setupStore()

test('should return the expected initial state', () => {
	const expected = {alert: false, email: false, section: 'intro'}
	const actual = store.getState().open
	expect(actual).toEqual(expected)
	})
test('should change the alarm value to true',() => {
	store.dispatch(openAlert())
	const expected = {alert: true}
	const actual = store.getState().open
	expect(actual).toEqual(expect.objectContaining(expected))
	})
test('should change the alarm value to false',() => {
	store.dispatch(closeAlert())
	const expected = {alert: false}
	const actual = store.getState().open
	expect(actual).toEqual(expect.objectContaining(expected))
	})
test('should change the email value to true',() => {
	store.dispatch(openEmail())
	const expected = {email: true}
	const actual = store.getState().open
	expect(actual).toEqual(expect.objectContaining(expected))
    })
test('should change the email value to false',() => {
	store.dispatch(closeEmail())
	const expected = {email: false}
	const actual = store.getState().open
	expect(actual).toEqual(expect.objectContaining(expected))
    })
test('should change the section value to intro',() => {
	const actual0 = store.getState().open
	store.dispatch(nowProfile())
	const actual1 = store.getState().open
	expect(actual0).not.toEqual(actual1)
	
	store.dispatch(nowIntro())
	const expected = {section: 'intro'}
	const actual2 = store.getState().open
	expect(actual2).toEqual(expect.objectContaining(expected))
	})  
test('should change the section value to profile', () => {
    store.dispatch(nowProfile())
	const expected = {section: 'profile'}
	const actual = store.getState().open
	expect(actual).toEqual(expect.objectContaining(expected))
    })
test('should change the section value to project', () => {
    store.dispatch(nowProject())
	const expected = {section: 'project'}
	const actual = store.getState().open
	expect(actual).toEqual(expect.objectContaining(expected))
    })
test('should change the section value to contacts', () => {
    store.dispatch(nowContacts())
	const expected = {section: 'contacts'}
	const actual = store.getState().open
	expect(actual).toEqual(expect.objectContaining(expected))
    })
