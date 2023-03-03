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
	<Body size={size}>
	    <Header/>
            <BackImg 
                data-testid='backimg'
                current={section}
                size={size}>
              <Router/>
            </BackImg>
        <Footer />
    </Body>)
		
	}



