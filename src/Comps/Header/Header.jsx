import React from 'react'

import {Container, First, Text,
	                 FontIcon, Second} from './Header.styled.js'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import {useMediaQuery} from 'react-responsive'
                 
export const Header =()=> {
  const isTablet = useMediaQuery({ query: '(min-width: 800px)'  })


	    return (       <Container data-testid='container'>
	                           <First data-testid='first'>
	                             <Text>Development</Text>
	                             <FontIcon  icon={faGear}/>
	                           </First>
	                           
	                           <Second tablet={isTablet} data-testid='second'/>
	                   </Container>
	          )}
