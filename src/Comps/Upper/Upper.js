import React from 'react'
import styled from 'styled-components'

export function Upper(){
	const [state, setState] = React.useState(null)
	
	const handleChange0 = () => setState(0)
	const handleChange1 = () => setState(1)
	
	const Button = styled.button`
	z-index: 2;
	position: relative;
	width:100px;
	height:100px;
	background: ${props => props.state !== null ? props.state === 1 ? 'green' : 'grey': 'blue'}
	`
	
	return(
	<>
	<Button state={state}/>
	<Area text={state} onClick={handleChange0}/>
	<Area text={state} onClick={handleChange1}/>
	</>
	)
	}

function Area({text, onClick}){
	return <button style={{zIndex:'2', position:'relative'}} onClick={onClick}>{text}</button>
	}
