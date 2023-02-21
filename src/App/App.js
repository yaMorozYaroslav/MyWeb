import React from 'react';
import s from './App.module.css';
import {Header} from '../Comps/Header/Header'
import {Footer} from '../Comps/Footer/Footer'
import {Router} from '../Router/Router'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import {pics} from './pics/pics'

const Body = styled.div`
    height: 100%;
    width: 105%;
    margin: -8px 0px 0px -8px;
    @media (max-width: 850px){width:103%;}
    @media (max-width: 500px){width:105%;}
`
const BackImg = styled.div`
 ${({current}) => current === 'intro' && `
   background-image: url(${pics.intro});
   background-position: 0px -550px;
   background-size: cover;
  @media (max-width: 1250px){background-position: 0px -400px;}
  @media (max-width: 1000px){background-position: 0px -300px;}
  @media (max-width: 850px){background-position: 0px -200px;}
  @media (max-width: 600px){background-position: -50px -100px;;}
  @media (max-width: 450px){background-position: -50px -100px;}
 `}
 ${({current}) => current === 'profile' && `
   background-image: url(${pics.profile});
   background-position: 0px -270px;
   background-size: cover;
  @media (max-width: 1250px){background-position: 0px -220px;}
  @media (max-width: 1000px){background-position: 0px -200px;}
  @media (max-width: 750px){background-position: -200px -200px;}
  @media (max-width: 650px){background-position: -500px -400px;;}
  @media (max-width: 450px){background-position: -450px -300px;}
 `}
 ${({current}) => current === 'project' && `
   background-image: url(${pics.project});
   background-position: 0px -400px;
   background-size: cover;
  @media (max-width: 1000px){background-position: -100px -200px;}
  @media (max-width: 850px){background-position: -500px -400px;;}
  @media (max-width: 450px){background-position: -450px -300px;}
 `}
 ${({current}) => current === 'contacts' && `
   background-image: url(${pics.contacts});
   background-position: 60px -455px;
   background-size: cover;
 `}
`

export function App() {
const section = useSelector(state => state.open.section)
	                 
	return(
	<Body>
	   <section className={s.header}><Header /></section>
      <BackImg current={section}>
      
       <section className={s.router}><Router/></section>
      

      </BackImg>
       <section className={s.footer}><Footer /></section>
    </Body>)
		
	}



