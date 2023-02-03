import mediaQuery from 'css-mediaquery';
import {fireEvent, screen} from '@testing-library/react'
import {renderWithProviders} from '../../Redux/test-util'
import {Header} from './Header'

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}


test('should change content if change screen size', () => {
	resizeWindow(300,300)
	const {container} = renderWithProviders(<Header/>)
	expect(container).toBe()
	})
