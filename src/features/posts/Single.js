import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Author} from './Author'
import {ReactionButtons} from './ReactionButtons'
export const Single =()=>{
	const {postId} = useParams()

	const post = useSelector(state=>state.posts.find(
		                                 post=>post.id===postId))
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
       <ReactionButtons post={post.id}/>
     </article>
   </section>
   	)
}