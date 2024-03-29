import {screen, fireEvent} from '@testing-library/react'
import {renderWithContext} from '../Context/util-test.js'
import { Context as ResponsiveContext } from 'react-responsive'
import {App} from './App'
import 'jest-styled-components'
import '@testing-library/jest-dom'

export const renderWithAll = (size, component) => 
                        renderWithContext(<ResponsiveContext.Provider
                                                value={{width: size}}>
                              {component}</ResponsiveContext.Provider>)
                              
describe('background image dependent on redux state', () => {
	
	it('displays the "intro" image by default', () => {
	  const {getByTestId} = renderWithAll(1251, <App/>)
	  expect(getByTestId('backimg')).toHaveStyle('background-image:url(intro.jpg)')
      })
	it('changes background image to "profile"', () => {
	  const {getByTestId,getByText} = renderWithAll(1251, <App/>)
	  fireEvent.click(getByText(/profile/i))
	  expect(getByTestId('backimg')).toHaveStyle('background-image:url(profile.jpg)')
      })
    it('changes background image to "project"', () => {
	  const {getByTestId,getByText} = renderWithAll(1251, <App/>)
	  fireEvent.click(getByText(/project/i))
	  expect(getByTestId('backimg')).toHaveStyle('background-image:url(project.jpg)')
      })
    it('changes background image to "contacts"', () => {
	  const {getByTestId,getByText} = renderWithAll(1251, <App/>)
	  fireEvent.click(getByText(/contacts/i))
	  expect(getByTestId('backimg')).toHaveStyle('background-image:url(contacts.jpg)')
      })
   })
   
describe('the width of the "body" depends on screen size', () => {
	it('has the expected default width', () => {
	  const {getByTestId} = renderWithAll(1000,<App/>)	
      expect(getByTestId('body')).toHaveStyle('width: 101%')
      })
    it('it has the expected width on a small laptop', () => {
	  const {getByTestId} = renderWithAll(799,<App/>)	
      expect(getByTestId('body')).toHaveStyle('width: 104%')
		})
	it('it has the expected width on a large mobile', () => {
	  const {getByTestId} = renderWithAll(599,<App/>)	
      expect(getByTestId('body')).toHaveStyle('width: 105%')
		})
		})
describe('background position depends on the screen in 7 options', () => {
it('has the expected default position', () => {
	const {getByTestId} = renderWithAll(1000,<App/>)
	expect(getByTestId('backimg')).toHaveStyle('background-position: 0px -300px;')
      })
it('has the expected position on a medium laptop', () => {
	const {getByTestId} = renderWithAll(999,<App/>)
	expect(getByTestId('backimg')).toHaveStyle('background-position: 0px -200px;')
	})
it('has the expected position on a small laptop', () => {
	const {getByTestId} = renderWithAll(799,<App/>)
	expect(getByTestId('backimg')).toHaveStyle('background-position: 0px -100px;')
	})
it('has the expected position on a large mobile phone', () => {
	const {getByTestId} = renderWithAll(599,<App/>)
	expect(getByTestId('backimg')).toHaveStyle('background-position: 0px -50px;')
	})
it('has the expected position on a medium mobile phone', () => {
	const {getByTestId} = renderWithAll(449,<App/>)
	expect(getByTestId('backimg')).toHaveStyle('background-position: 0px 0px;')
	})
it('has the expected position on a small mobile phone', () => {
	const {getByTestId} = renderWithAll(348,<App/>)
	expect(getByTestId('backimg')).toHaveStyle('background-position: -80px 0px;')
	})
	})
