import {Email} from './Email'
import {fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'

import {renderWithContext} from '../../Context/util-test'

describe('TestForEmail', () => {
	it('renders the form by default', () => {
		const {getByText} = renderWithContext(<Email/>)
		expect(getByText(/snork/i)).toBeInTheDocument()
		})
	})
