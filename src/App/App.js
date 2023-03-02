import React from 'react'

import {Header} from '../Comps/Header/Header'
import {Footer} from '../Comps/Footer/Footer'
import {Router} from '../Router/Router'

import {Body, BackImg} from './App.styled'
import {useSelector} from 'react-redux'

import {ScreenSize} from '../screen'

export function App() {
const section = useSelector(state => state.open.section)
//const section = useSelector(state => state.open.section)
	     const size = ScreenSize() 
	     console.log(size.lapS)           
	return(
	<Body title='Body'>
	    <Header/>
	    <p style={{fontSize: '100px',}}> {size.lapS ?'tablet':'not a tablet'} </p>
            <BackImg 
                title='BackImg'
                current={section}>
              <Router/>
            </BackImg>
        <Footer />
    </Body>)
		
	}



