import React from 'react';
import {useSelector} from 'react-redux';

export const PostsList =()=>{
	const posts = useSelector(state=>state.posts)

	const renderedPosts = posts.map(post=>(
		<article className="post-excerpt" key={post.id}>
		  <h3>{post.title}</h3>

		  ))
}
