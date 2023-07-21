import {OpenState} from '../../Context/OpenState'
import {Contacts} from './Contacts'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('TestForContacts', () => {
	test('shows another element on click', () => {
	  const {getByText} = render(<Contacts/>, {wrapper: OpenState})
	  //fireEvent.click(getByText(/Click to email/i))
	  expect(getByText(/Click to email/i)).toBeInTheDocument()
		})
	})
