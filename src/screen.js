import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {mobileL} from './Redux/sizeSlice'

function ScreenSize(){
	const dispatch = useDispatch()
	const onMobiL = () => dispatch(mobileL())
	
	}

const size = {
  mobS: '350px',
  mobM: '450px',
  mobL: '600px',
  tabl: '850px',
  lapt: '1000px',
  lapL: '1250px',
}

export const device = {
	
  mobS: `(max-width: ${size.mobS})`,
  mobM: `(max-width: ${size.mobM})`,
  mobL: `(max-width: ${size.mobL})`,
  tabl: `(max-width: ${size.tabl})`,
  lapt: `(max-width: ${size.lapt})`,
  lapL: `(max-width: ${size.lapL})`,
}

