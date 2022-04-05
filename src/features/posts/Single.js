import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Author} from './Author'
import {selectPostById} from './postsSlice'

export const Single =()=>{
	const {postId} = useParams()

	const post = useSelector(state=>selectPostById(state, postId))
	if(!post){
		return(
       <section className="noPost">
         <h2>Post not found!</h2>
       </section>
	 )
	}
  
   return(
  <section>
     <article className="post">
       <h2>{post.userId}</h2>
       <p className="post-content">{post.content}</p>
       <Author userId={post.userId} />
       <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
       </Link>
     </article>
   </section>
   	)
}