import React from 'react'
import s from './Header.module.css'
import {Container, First, Text, FontIcon, Second} from './Header.styled.js'
import styled from 'styled-components'

const Second = styled.div`
    width: 70%;
    border: 3px solid black;
    background-image: url('./clouds.jpg');
    background-position: 0px 0px;
    background-size:cover;
   @media(max-width: 850px){
    width:30%;
   }
   @media(max-width: 450px){
    display:none;
   }
  `


export const Header =()=> {
	    return (       <Container>
	                          <First>
	                             <Text>Development</Text>
	                             <FontIcon/>
	                           </First>
	                           
	                           <Second />
	                   </Container>
	          )}
