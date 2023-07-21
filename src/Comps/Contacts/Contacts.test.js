import {OpenState} from '../../Context/OpenState'
import {Contacts} from './Contacts'

describe('testtest', () => {
	test('renders', () => {
	  render(<Contacts/>, {wrapper: OpenState}
		}
	})
