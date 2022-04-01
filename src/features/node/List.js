import React from 'react'
import {useSelector} from 'react-redux'

export const List =()=>{
	const nodes = useSelector(state=>state.nodes)

	const shown = nodes.map(node=><article key={node.id}>{node.name}</article>)

		return <section>{shown}</section>
}