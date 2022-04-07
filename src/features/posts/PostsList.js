import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
//import {AddPost} from './AddPost'
import {selectAllPosts, fetchPosts} from './postsSlice'

const FirstWord = ({post})=>{
  return(
    <article className="post-excerpt" key={post.id}>
       <h3 className="postTitle">{post.name}</h3>
       <p className="postConten">{post.min_size}</p>
    <Link to={`/posts/${post.id}`}>View</Link>
    </article>
    )
}

export const PostsList =()=>{
   const dispatch = useDispatch()
   const posts = useSelector(selectAllPosts)
   
   const postStatus = useSelector(state=>state.posts.status)
   const error = useSelector(state=>state.posts.error)

   React.useEffect(()=>{
    if(postStatus==='idle'){
      dispatch(fetchPosts())
    }
   }, [postStatus, dispatch])

   let content

   if(postStatus === 'loading'){
    content = <p>"Loading..." </p>
   }else if (postStatus==='succeeded'){
   content = posts.map(post=>(
         <FirstWord key={post.id} post={post} />
        	))
 }else if(postStatus === 'failed'){
  content = <div>{error}</div>
}
   return (<div className="addAndList">
  
  <section className="postsList"><h1>Posts</h1>{content}</section>
   	</div>)
}