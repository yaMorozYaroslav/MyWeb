import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Author} from './Author'
import {TimeAgo} from './TimeAgo'
//import {ReactionButtons} from './ReactionButtons'


export const PostsList =()=> {
	const posts = useSelector(state=>state.posts)
  const orderedPosts = posts.slice().sort((a, b)=>b.date.localeCompare(a.date))

	const renderedPosts = orderedPosts.map(post=>(

      <article className="excerpt" key={post.id}>
                                  
                   <h3>{post.title}</h3> 
                   <p className="post-content">{post.content.substring(0,100)}</p>
                   <TimeAgo timestamp={post.date}/>
                   <Author userId={post.user} /><br/>
                   
            <Link to={`posts/${post.id}`} className="button muted-button">
                                                                 View Post</Link>
      </article>
	))
	  return (
    <section className="posts-list"><h1>Posts</h1>{renderedPosts}
      </section>
	  )
    }
