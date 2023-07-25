import {useMediaQuery} from 'react-responsive'
                 

export function ScreenSize(){
const size = {
  mobS: useMediaQuery({ query: '(max-width: 350px)'}), 
  mobM: useMediaQuery({ query: '(min-width: 350px)'}),
  mobL: useMediaQuery({ query: '(min-width: 450px) and (max-width:599px)'}),
  lapS: useMediaQuery({ query: '(min-width: 600px)'}),
  lapM: useMediaQuery({ query: '(min-width: 800px)'}),
  lapL: useMediaQuery({ query: '(min-width: 1000px)'})
}
	return size
	     
	}
