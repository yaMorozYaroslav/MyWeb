import React from 'react';
import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import {added} from './nodeSlc'

export const Add =()=> {
	const dispatch = useDispatch()

	const [text, setText] = React.useState('')

	const handText = text => setText(text.target.value)

    const onSave = () => {
    	if(text){
    		dispatch(added({id: nanoid(), text}))
    		    setText('')
     }
    }
   return(
     <section><form>

          <label htmlFor="text">text</label>
          <input 
               type="text" id="text" name="text" placeholder="Why"
               value={text} onChange={handText} />

          <button type="button" onClick={onSave}>save text</button>

    </form></section>
   	)

}