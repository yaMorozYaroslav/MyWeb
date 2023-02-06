import React from 'react'

import {Container, First, Text,
	                 FontIcon, Second} from './Header.styled.js'
 import { faGear } from '@fortawesome/free-solid-svg-icons'
                                       
export const Header =()=> {
	
	    return (       <Container data-testid='container'>
	                           <First>
	                             <Text>Development</Text>
	                             <FontIcon  icon={faGear}/>
	                           </First>
	                           
	                           <Second />
	                   </Container>
	          )}
