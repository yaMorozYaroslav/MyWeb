import React from 'react'
import {closeAlert} from '../../Redux/openSlice'
import {useDispatch} from 'react-redux'

export const Alert = () => {
	const dispatch = useDispatch()
	
	return(
	<section>
	<h1>You've sent the message</h1>
	<button onClick={()=>dispatch(closeAlert())}>close</button>
	</section>
	)
	}
