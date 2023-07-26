import {useMediaQuery} from 'react-responsive'
                 

export function ScreenSize(){
const size = {
  mobS: useMediaQuery({ query: '(max-width: 350px)'}), 
  mobM: useMediaQuery({ query: '(min-width: 351px) and (max-width:449px)'}),
  mobL: useMediaQuery({ query: '(min-width: 450px) and (max-width:599px)'}),
  lapS: useMediaQuery({ query: '(min-width: 600px) and (max-width: 799px)'}),
  lapM: useMediaQuery({ query: '(min-width: 800px) and (max-width: 999px)'}),
  lapL: useMediaQuery({ query: '(min-width: 1000px)'})
}
	return size
	     
	}
