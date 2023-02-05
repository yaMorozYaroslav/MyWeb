import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import city from './city.jpg'

export const Container = styled.div`
    display: flex;
    width: 100%;
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
export const FontIcon = styled(<FontAwesomeIcon icon={faGear}/>)`
    margin:10px 25px 0px 5px;
    font-size: 55px;
   @media(max-width:850px){
    font:size:48px;
  }
   @media(max-width:450px){
    font-size:40px; 
  }
  `
export const Second = styled.div`
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
