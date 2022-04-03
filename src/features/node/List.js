import React from 'react'
import {useSelector} from 'react-redux'
import {Add} from './Add'

export const List =()=>{
	const nodes = useSelector(state=>state.nodes)

	const shown = nodes.map(node=><article key={node.id}>{node.text}</article>)

		return (<>
		<section>{shown}</section>
		<Add/>
		       </>)
}