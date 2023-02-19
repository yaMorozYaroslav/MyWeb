import React from 'react';
import s from './App.module.css';
import {Header} from '../Comps/Header/Header'
import {Footer} from '../Comps/Footer/Footer'
import {Router} from '../Router/Router'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import classnames from 'classnames'

const Body = styled.div`
    height: 100%;
    width: 101.2%;
    margin: -8px 0px 0px -8px;
`
const Intro = styled.div`
    background-image: url('pics/intro.jpg');
    background-position: 0px -550px;
    background-size: cover;
`
const Profile = styled.div`
    background-image: url('pics/profile.jpg');
    background-position: 0px -270px;
    background-size: cover;
`
export function App() {
const section = useSelector(state => state.open.section)
function BackImg(current = section){
	switch(current){
		case 'profile':
		return console.log('kick')
		default:
		return (<Intro><section className={s.header}><Header /></section>
                        <section className={s.router}><Router/></section>
                        <section className={s.footer}><Footer /></section></Intro>)
		}
	}
	BackImg()
  return (
    <Body>
       <BackImg/>
    </Body>
  )
}

