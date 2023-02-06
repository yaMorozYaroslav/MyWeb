import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom' 
import styled from 'styled-components' 
 
const location = useLocation();
const {pathname} = location;
const splitLocation = pathname.split("/")
	
export const Linker0 = styled(Link)`
     splitLocation[1]===""?
    display: block;
    font-family: Times, bold;
    font-size: 32px;
    text-decoration: none;
    color:  white;
    :
    display: block;
   font-family: Times, bold;
   font-size: 32px;
   text-decoration: none;
   color: black; 
`
