import React from 'react';
import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import {added} from './nodeSlc'

export const Add =()=> {
	const dispath = useDispatch()

	const [text, setText] = React.useState('')

	const handText = text => setText(text.target.event)

    const onSave = () => {
    	if(text){
    		dispatch(added({id: nanoid(), text}))
    		    setText()
    	}
    }
}