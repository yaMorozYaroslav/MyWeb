import React from "react";
//import styles from './Intro.module.css';
import {Container, Text} from './Intro.styled'
import {ScreenSize} from '../../screen'

export const Intro = () =>{
	
	const screen = ScreenSize()
	
	return <>
	    <Container size={screen}>
	    
  <Text size={screen}>
	Welcome to the site. </Text>
	
  <Text size={screen}>Here you will find important
   information about my skills, aspirations and areas of interest
  along with an example of work.</Text>
  
  <Text size={screen}>Deployed application and its
   source code are available via links.</Text>
  
  <Text size={screen}>I also made it possible to write
     me an email directly from the "Contacts" section.</Text>
     
  <Text size={screen}>All photos are copyrighted.</Text>
  
    </Container>
    </>
}
