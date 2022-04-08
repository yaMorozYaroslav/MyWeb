import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {postUpdated} from './postsSlice'

export const EditPostForm=({match})=>{
   const send = useDispatch()
   const storage = useHistory()

   const {postId} = match.params
   const post = useSelector(state=>state.posts.find(post=>post.id===postId))

   const [title, setHead] = React.useState(post.title)
   const [content, setBody] = React.useState(post.content)

   const handHead =tic=> setHead(tic.target.value)
   const handBody =pit=> setBody(pit.target.value)

   const handClick =()=>{
    if(title&&content){
      send(postUpdated({id:postId, title, content}))
      storage.push(`/posts/${postId}`)
    }
   }
   return(
 <section>
  <h2>Edit Post</h2>
  <form>

      <label htmlFor="postTitle">Title:</label>
       <input
           type="text"
           id="postTitle"
           name="postTitle"
           placeholder="sheep"
           value={title}
           onChange={handHead} />

      <label htmlFor="postContent">Content:</label>
        <textarea
           id="postContent"
           name="postContent"
           value={content}
           onChange={handBody} />
      <button type="button" onClick={handClick}>Save</button>

   </form>
  </section>
    )
}