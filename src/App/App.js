import React from 'react';
import s from './App.module.css';
import {Header} from '../Comps/Header/Header'
import {Footer} from '../Comps/Footer/Footer'
import {Router} from '../Router/Router'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import {pics} from './pics/pics'
import {device} from '../screen'

const Body = styled.div`
    height: 100%;
    width: 105%;
    margin: -8px 0px 0px -8px;
    @media ${device.tabl}{width:103%;}
    @media ${device.mobL}{width:105%;}
`
const BackImg = styled.div`
 ${({current}) => current === 'intro' && `
   background-image: url(${pics.intro});
   background-position: 0px -550px;
   background-size: cover;
  @media ${device.lapL}{background-position: 0px -400px;}
  @media ${device.lapM}{background-position: 0px -300px;}
  @media ${device.tabl}{background-position: 0px -200px;}
  @media ${device.mobL}{background-position: -50px -100px;;}
  @media ${device.mobM}{background-position: -50px -100px;}
 `}
 ${({current}) => current === 'profile' && `
   background-image: url(${pics.profile});
   background-position: 0px -270px;
   background-size: cover;
  @media ${device.lapL}{background-position: 0px -220px;}
  @media ${device.lapM}{background-position: 0px -200px;}
  @media ${device.tabl}{background-position: -100px -200px;}
  @media ${device.mobL}{background-position: -500px -400px;;}
  @media ${device.mobM}{background-position: -450px -300px;}
 `}
 ${({current}) => current === 'project' && `
   background-image: url(${pics.project});
   background-position: 0px -400px;
   background-size: cover;
  @media ${device.lapL}{background-position: 0px -200px;}
  @media ${device.tabl}{background-position: -150px -200px;;}
  @media ${device.mobL}{background-position: -420px -200px;}
 `}
 ${({current}) => current === 'contacts' && `
   background-image: url(${pics.contacts});
   background-position: 60px -455px;
   background-size: cover;
  @media ${device.lapL}{background-position: 0 -300px;}
  @media ${device.tabl}{background-position: 0 -100px;}
  @media ${device.mobM}{background-position: -80px -135px;}
 `}
`

export function App() {
const section = useSelector(state => state.open.section)
	                 
	return(
	<Body>
	   <Header/>
         <BackImg current={section}><Router/></BackImg>
       <Footer />
    </Body>)
		
	}



