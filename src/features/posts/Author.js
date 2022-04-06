import React from 'react'
import {useSelector} from 'react-redux'
//import {useParam} from 'react-router-dom'

export const Author = ({userId}) => {

	const author = useSelector(state=>
  state.users.find(user=>user.id===userId)
		)
	return <span>by {author?author.name:'unknow'}</span>
}