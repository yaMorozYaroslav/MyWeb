import React from 'react'
import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'

import {postAdded} from './postsSlice'

export const AddPostForm =()=>{

  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')

  const dispatch = useDispatch()

  const handTitle =e=> setTitle(e.target.value)
  const handContent =e=> setContent(e.target.value)

  const onSavePostClicked = () => {
    if(title && content){
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        }))
        setTitle('')
        setContent('')
    }
  }

  return(
  <section>
     <form>

       <label htmlFor="postTitle">Post Title:</label>
        <input 
               type="text"
               id="postTitle"
               value={title}
               onChange={handTitle} />

     <label htmlFor="postContent">Post Content:</label>
         <textarea
                  id="postContent"
                  value={content}
                  onChange={handContent} />

      <button 
              type="button"
              onClick={onSavePostClicked}
                                         >Save</button>
    </form>
  </section>
    )
}