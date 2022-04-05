import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'

import {postUpdated} from './postsSlice'

export const EditPost = () =>{
	const {postId} = useParams()

	const post = useSelector(state=>state.posts.find(
		                                  post=>post.id===postId))

	const [title, setTitle] = React.useState(post.title)
	const [content,setContent] = React.useState(post.content)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onTitle = o => setTitle(o.target.value)
    const onContent = o => setContent(o.target.value)

    const onSave =()=>{
    	if(title&&content){
    		dispatch(postUpdated({id: postId, title, content}))
    		navigate(`/posts/${postId}`)
    	}
    }

     return(
   <section>
       <h2>Edit Post</h2>
          <form>
             <label htmlFor="postTitel">Post Title:</label>
             <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What is?"
                    value={title}
                    onChange={onTitle} />

                <label htmlFor="postContent">Content:</label>
                <textarea
                      id="postContent"
                      name="postContent"
                      value={content}
                      onChange={onContent} />
               </form>
               <button type="button" onClick={onSave}>
               Save</button>
             </section>
     	)
      }