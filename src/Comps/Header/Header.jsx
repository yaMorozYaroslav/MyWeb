import React from 'react'

import {Container, First, Text,
	                 FontIcon, Second} from './Header.styled.js'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import {useMediaQuery} from 'react-responsive'
                 
export const Header =()=> {
  const clouds = new URL('/header/clouds.jpg', import.meta.url).href
  const isTablet = useMediaQuery({ query: '(min-width: 800px)'  })


	    return (       <Container data-testid='container'>
	                           <First data-testid='first'>
	                             <Text>Development</Text>
	                             <FontIcon  icon={faGear}/>
	                           </First>
	                           
	                           <Second src={clouds}
	                                   tablet={isTablet}
	                                   data-testid='second'/>
	                   </Container>
	          )}
