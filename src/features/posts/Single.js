import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Author} from './Author'

export const Single =()=>{
	const {postId} = useParams()

	const post = useSelector(state=>state.posts.find(
		                                 post=>post.id===postId))
	if(!post){
		return(
       <section>
         <h2>Post nor found!</h2>
       </section>
	 )
	}

   return(
  <section>
     <article className="post">
       <h2>{post.title}</h2>
       <p className="post-content">{post.content}</p>
       <Author userId={post.user}/>
     </article>
   </section>
   	)
}