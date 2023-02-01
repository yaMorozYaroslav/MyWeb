import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {renderWithProviders} from '../Redux/test-util'
import {App} from './App'

test('renders the child component', () => {
	const {container} = renderWithProviders(<App />)
	expect(container).toBe()
	})
