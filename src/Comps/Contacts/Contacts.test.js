import {Contacts} from './Contacts'
import {fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'

import {renderWithContext} from '../../Context/util-test'

describe('TestForContacts', () => {
	it('displays the button by default', () => {
		const {getByText} = renderWithContext(<Contacts/>)
		expect(getByText(/Click to email/i)).toBeInTheDocument()
		})
	it('shows another element on click', () => {
	  const {getByText} = renderWithContext(<Contacts/>) 
	  fireEvent.click(getByText(/Click to email/i))
	  expect(getByText(/subject/i)).toBeInTheDocument()
		})
	})
