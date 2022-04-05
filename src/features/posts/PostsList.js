import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {AddPost} from './AddPost'
import {selectAllPosts} from './postsSlice'

export const PostsList =()=>{
   const posts = useSelector(selectAllPosts)
   const renderedPosts = posts.map(post=>(

 <article key={post.id}>
          <h3 className="postTitle">{post.title}</h3>
          <p className="postConten">{post.content}</p>

     <Link to={`posts/${post.id}`} className="linkView">
       View Post</Link>
    </article>
   	))
   return (<div className="addAndList">
  <AddPost/>
  <section className="postsList"><h1>Posts</h1>{renderedPosts}</section>
   	</div>)
}