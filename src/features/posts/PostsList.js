import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {AddPost} from './AddPost'
import {selectAllPosts, fetchPosts} from './postsSlice'

export const PostsList =()=>{
   const dispatch = useDispatch()
   const posts = useSelector(selectAllPosts)
   
   const postStatus = useSelector(state=>state.posts.status)

   React.useEffect(()=>{
    if(postStatus==='idle'){
      dispatch(fetchPosts())
    }
   }, [postStatus, dispatch])

   const renderedPosts = posts.map(post=>(

 <article key={post.id}>
          <h3 className="postTitle">{post.name}</h3>
          <p className="postConten">{post.min_size}</p>

     <Link to={`posts/${post.id}`} className="linkView">
       View Post</Link>
    </article>
   	))
   return (<div className="addAndList">
  <AddPost/>
  <section className="postsList"><h1>Posts</h1>{renderedPosts}</section>
   	</div>)
}