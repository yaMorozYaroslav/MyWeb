import {useMediaQuery} from 'react-responsive'
                 

export function ScreenSize(){
const size = {
  mobS: useMediaQuery({ query: '(max-width: 350px)'}),
  mobM: useMediaQuery({ query: '(max-width: 450px)'}),
  mobL: useMediaQuery({ query: '(max-width: 600px)'}),
  lapS: useMediaQuery({ query: '(max-width: 800px)'}),
  lapM: useMediaQuery({ query: '(max-width: 1000px)'}),
  lapL: useMediaQuery({ query: '(max-width: 1250px)'})
}
	return size
	     
	}
