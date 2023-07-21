import {OpenState} from '../../Context/OpenState'
import {Contacts} from './Contacts'
import {fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'

import {renderWithProviders} from '../../Context/util-test'

describe('TestForContacts', () => {
	test('shows another element on click', () => {
	  const {getByText} = renderWithProviders(<Contacts/>)
	  expect(getByText(/Click to email/i)).toBeInTheDocument()
	  fireEvent.click(getByText(/Click to email/i))
	  expect(getByText(/subject/i)).toBeInTheDocument()
		})
	})
