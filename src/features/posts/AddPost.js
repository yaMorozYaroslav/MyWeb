import React from 'react'
import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'

import {postAdded} from './postsSlice'

export const AddPost =()=>{
	const [title, setTitle] = React.useState('')
	const [content, setContent] = React.useState('')

	const dispatch = useDispatch()

	const handTitle =e=> setTitle(e.target.value)
	const handContent =e=> setContent(e.target.value)

	const onSave =()=>{
		        if(title&&content){
			     dispatch(postAdded({id: nanoid(), title, content}))
			           setTitle('')
			           setContent('')
		}
	}
  return(
      <section className="addPost">
       <form>

          <label htmlFor="title">Title:</label>
            <input
                   type="text" id="title" name="title"
                   value={title} onChange={handTitle} />

          <label htmlFor="content">Content:</label>
            <textarea
                     id="content"
                     value={content}
                     onChange={handContent} />
      <button type="button" onClick={onSave}>Save</button>

        </form>
      </section>
  	)
}