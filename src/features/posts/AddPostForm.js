import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {postAdded} from './postsSlice'

export const AddPostForm =()=>{

  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [userId, setUserId] = React.useState('')

  const dispatch = useDispatch()
  const users = useSelector(state=>state.users)

  const handTitle =e=> setTitle(e.target.value)
  const handContent =e=> setContent(e.target.value)
  const handAuthor =a=> setUserId(a.target.value)

  const onSavePostClicked = () => {
    if(title && content){

      dispatch( postAdded(title,content, userId))
        setTitle('')
        setContent('')
    }
  }
  const canSave = Boolean(title)&&Boolean(content)&&Boolean(userId)
 
  const usersOptions = users.map(user=>(
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
      ))

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
        <label htmlFor="postAuthor">Author:</label>
    <select id="postAuthor" value={userId} onChange={handAuthor}>
       <option value=""></option>
       {usersOptions}
    </select>
      <button 
              type="button"
              onClick={onSavePostClicked}
              disabled={!canSave}
                                         >Save</button>
    </form>
  </section>
    )
}