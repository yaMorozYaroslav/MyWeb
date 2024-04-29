import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom' 
import styled from 'styled-components' 
import {useSelector} from 'react-redux'

export const Linker0 = styled(Link)`
     
    display: block;
    font-family: Times, bold;
    font-size: 32px;
    text-decoration: none;
    color:  ${props => props.current===""? 'white':'green'}
    
`
