import React from 'react'

import {Header} from '../Comps/Header/Header'
import {Footer} from '../Comps/Footer/Footer'
import {Router} from '../Router/Router'

import {Body, BackImg} from './App.styled'
import {useSelector} from 'react-redux'


export function App() {
const section = useSelector(state => state.open.section)
	                 
	return(
	<Body title='Body'>
	    <Header/>
            <BackImg 
                title='BackImg'
                current={section}>
              <Router/>
            </BackImg>
        <Footer />
    </Body>)
		
	}



