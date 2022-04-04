import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import {postAdded} from './postsSlice'

export const AddPost =()=>{
	const dispatch = useDispatch()
  
	const [title, setTitle] = React.useState('')
	const [content, setCont] = React.useState('')
	const [userId, setId] = React.useState('')
  
  const users = useSelector(state=>state.users)

	const handTitle =e=> setTitle(e.target.value)
	const handContent =e=> setCont(e.target.value)
  const handAuthor =a=> setId(a.target.value)
	const onSave =()=>{
		        if(title&&content){
			     dispatch(postAdded({ id: nanoid(),title, content, userId}))
			           setTitle('')
			           setCont('')
		}
	}
	const allRight = Boolean(title)&&Boolean(content)&&Boolean(userId)

	const usersOptions = users.map(user =>(
 <option key={user.id} value={user.id}>
    {user.name}</option>
	))
  

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
          
          <label htmlFor="author">author:</label>
         
          <select id="postAuthor" value={userId} onChange={handAuthor}>
            <option value=""></option>
            {usersOptions}
          </select>
      <button type="button" onClick={onSave} disabled={!allRight}>Save</button>

        </form>
      </section>
  	)
}