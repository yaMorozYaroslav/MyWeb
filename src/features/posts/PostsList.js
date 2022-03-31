import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

export const PostsList =()=>{
   const posts = useSelector(state=>state.posts)

   const renderedPosts = posts.map(post=>(

 <article key={post.id}>
          <h3 className="postTitle">{post.title}</h3>
          <p className="postConten">{post.content.substring(0,100)}</p>

     <Link to={`posts/${post.id}`} className="linkView">
       View Post</Link>
    </article>
   	))
   return (
  <section className="postsList"><h1>Posts</h1>{renderedPosts}</section>
   	)
}