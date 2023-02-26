import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {sizeSlice} from './Redux/sizeSlice'
import {mobiS, mobiM, mobiL, tablet,
	            laptS, laptM, laptL} from './Redux/sizeSlice'
	            
//import setupStore from './Redux/store'

export function ScreenSize(){
	const dispatch = useDispatch()
	//const actual = useSelector(state => state.size)
	const actual = useSelector(state => state.size)
	
	console.log(actual)
	React.useEffect(()=>{
		if(width.mobiS)dispatch(mobiS())
		if(width.mobiM)dispatch(mobiM())
		if(width.mobiL)dispatch(mobiL())
		if(width.tablet)dispatch(tablet())
		if(width.laptS)dispatch(laptS())
		if(width.laptM)dispatch(laptM())
		if(width.laptL)dispatch(laptL())
		},[dispatch])
	//console.log(sizeSlice.actions.mobileL()) 
	return (
	console.log(sizeSlice.actions.mobiL(), actual, window.innerWidth )
	
	
	     )
	}
const width = {
	mobiS: window.innerWidth < 350,
	mobiM: window.innerWidth > 350 && window.innerWidth < 450,
	mobiL: window.innerWidth > 450 && window.innerWidth < 600,
	tablet: window.innerWidth > 600 && window.innerWidth < 850,
    laptS: window.innerWidth > 850 && window.innerWidth < 1000,
    laptM: window.innerWidth > 1000 && window.innerWidth < 1250,
    laptL: window.innerWidth > 1250 
	
	}

const size = {
  mobS: '350px',
  mobM: '450px',
  mobL: '600px',
  tabl: '850px',
  lapt: '1000px',
  lapL: '1250px'
}

export const device = {
	
  mobS: `(max-width: ${size.mobS})`,
  mobM: `(max-width: ${size.mobM})`,
  mobL: `(max-width: ${size.mobL})`,
  tabl: `(max-width: ${size.tabl})`,
  lapt: `(max-width: ${size.lapt})`,
  lapL: `(max-width: ${size.lapL})`,
}

