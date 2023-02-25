import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {sizeSlice} from './Redux/sizeSlice'
import {mobileL} from './Redux/sizeSlice'
import setupStore from './Redux/store'

export function ScreenSize(){
	const dispatch = useDispatch()
	const onMobiL = () => dispatch(mobileL())
	//const newState = sizeSlice.reducer(sizeSlice.actions.mobileL())
	onMobiL()
	setupStore.getState()
	const actual = useSelector(state => state.size)
	React.useEffect(()=>{})
	return (
	console.log(sizeSlice.actions.mobileL(), actual )
	
	     )
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

