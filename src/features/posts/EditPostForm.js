import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {postUpdated} from './postsSlice'

export const EditPostForm=({match})=>{
   const send = useDispatch()
   const storage = useHistory()

   const {postId} = match.params
   const post = state=>state.posts.find(post=>post.id===postId)

   const [head, setHead] = React.useState(post.title)
   const [body, setBody] = React.useState(post.content)

   const handHead =tit=> setHead(tit.target.value)
   const handBody =pit=> setBody(pit.target.value)

   const handClick =()=>{
    if(head&&body){
      send(postUpdated({id:postId, head, body}))
      storage.push(`/posts/${postId}`)
    }
   }
}