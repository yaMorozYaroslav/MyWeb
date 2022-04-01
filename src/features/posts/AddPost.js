import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import {postAdded} from './postsSlice'

export const AddPost =()=>{
	const dispatch = useDispatch()
  
	const [title, setTitle] = React.useState('')
	const [content, setCont] = React.useState('')

	const handTitle =e=> setTitle(e.target.value)
	const handContent =e=> setCont(e.target.value)

	const onSave =()=>{
		        if(title&&content){
			     dispatch(postAdded({ id: nanoid(),title, content}))
			           setTitle('')
			           setCont('')
		}
	}
	const allRight = Boolean(title)&&Boolean(content)

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
      <button type="button" onClick={onSave} disabled={!allRight}>Save</button>

        </form>
      </section>
  	)
}