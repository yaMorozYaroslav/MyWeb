import mediaQuery from 'css-mediaquery';
import {fireEvent, screen} from '@testing-library/react'
import {renderWithProviders} from '../../Redux/test-util'
import {Header} from './Header'
import styled from 'styled-components'
import '@testing-library/jest-dom'

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}


test('should change content if change screen size', () => {
	resizeWindow(300,300)
	const {container} = renderWithProviders(<Header/>)
	const headerClass = Header().type.styledComponentId
	const MyHeaderRoots = document.getElementsByClassName(headerClass)
	const style = window.getComputedStyle(MyHeaderRoots[0])
	
	expect(style.display).toBe('flex')
	//expect(container).toBe()
	})
	
test('should change CSS properies', () => {
	const {getByTestId} = renderWithProviders(<Header/>)
	expect(getByTestId('container')).toHaveStyle('display: none')
	})
