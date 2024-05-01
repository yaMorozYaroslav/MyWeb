import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import city from '../../assets/city.jpg'
import clouds from '/header/clouds.jpg'


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    position: fixed;
    z-index:1;
    top:0;
           `
export const First = styled.div`
    display: flex;
    width: 55%;
    color: white;
    border: 3px solid black;
    background-image: url(${city});
    background-position: 10px -30px;
    background-size:cover;
    
   @media (max-width: 850px) {
    width:70%;
    background-position: 10px -20px;
      }
   @media (max-width: 450px) {
    width:100%;
    background-position: 5px -35px;
     }      
         `
export const Text = styled.h1`
    margin: 20px 0px 0px 20px;
    font-family: 'Sorts Mill Goudy', serif;
    font-size: 42px;
   @media(max-width: 850px){ 
    font-size: 40px;
 } 
   @media(max-width: 450px){ 
    font-size: 30px;
 } 
   `
export const FontIcon = styled(FontAwesomeIcon)`
    margin:10px 25px 0px 5px;
    font-size: 55px;
   @media(max-width:850px){
    font:size:48px;
  }
   @media(max-width:450px){
    font-size:40px; 
  }
  `
export const Second = styled.img`
    width: 70%;
    height:120px;
    border: 3px solid black;

   @media(max-width: 850px){
    width:30%;
   }
   @media(max-width: 450px){
    display:none;
   }
  `
