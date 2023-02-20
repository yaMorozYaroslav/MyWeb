import React from 'react';
import s from './App.module.css';
import {Header} from '../Comps/Header/Header'
import {Footer} from '../Comps/Footer/Footer'
import {Router} from '../Router/Router'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import classnames from 'classnames'
import {pics} from './pics/pics'
const Body = styled.div`
    height: 100%;
    width: 101.2%;
    margin: -8px 0px 0px -8px;
`
const Intro = styled.div`
    background-image: url(${pics.intro});
    background-position: 0px -550px;
    background-size: cover;
`
const Profile = styled.div`
    background-image: url(${pics.profile});
    background-position: 0px -270px;
    background-size: cover;
`
const Project = styled.div`
    background-image: url(${pics.project});
    background-position:0px -400px;
    background-size:cover;
`
const Contacts = styled.div`
    background-image: url(${pics.contacts});
    background-position: 60px -455px;
    background-size: cover;
`
export function App() {
const section = useSelector(state => state.open.section)
	
	 const BackImg = section === 'intro' ?Intro:null,
	                  section === 'profile'?Profile:null
	                 
	return(
	<Body>
      <BackImg>
       <section className={s.header}><Header /></section>
       <section className={s.router}><Router/></section>
       <section className={s.footer}><Footer /></section>

    </BackImg>
   </Body>)
		
	}



