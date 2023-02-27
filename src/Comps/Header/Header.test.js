import {fireEvent, screen} from '@testing-library/react'
import {renderWithProviders} from '../../Redux/test-util'
import {Header} from './Header'
import styled from 'styled-components'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import '@testing-library/jest-dom/extend-expect'
import mediaQuery from 'css-mediaquery'


function createMatchMedia(width) {
  return (query) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width) {
  window.matchMedia = createMatchMedia(width);
}
/*
const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}*/


/*test('should change content if change screen size', () => {
	resizeWindow(300,300)
	const {container} = renderWithProviders(<Header/>)
	const headerClass = Header().type.styledComponentId
	const MyHeaderRoots = document.getElementsByClassName(headerClass)
	const style = window.getComputedStyle(MyHeaderRoots[0])
	
	expect(style.display).toBe('flex')
	//expect(container).toBe()
	}) */
	
test('should change CSS properies', () => {
	
	resizeScreenSize(300)
	renderWithProviders(<Header/>)
	
	console.log(window.innerWidth, window.innerHeight)
	//expect(getByTestId('second')).toHaveStyleRule('display', 'none')
	expect(screen.getByText(/small/i)).toBe()
	})
