import React from 'react'
import {render} from '@testing-library/react'

import {OpenState} from '../Context/OpenState'

export const renderWithProviders = (ui, options) => 
                            render(ui, {wrapper: OpenState, ...options})
  
	
