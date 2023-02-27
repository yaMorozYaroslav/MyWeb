import React from 'react'

import {Container, First, Text,
	                 FontIcon, Second} from './Header.styled.js'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'
                 
export const Header =()=> {
const size = useSelector(state => state.size)

	    return (       <Container data-testid='container'>
	                           <First data-testid='first'>
	                             <Text>Development</Text>
	                             <FontIcon  icon={faGear}/>
	                           </First>
	                           
	                           <Second screen={size} data-testid='second'/>
	                   </Container>
	          )}
