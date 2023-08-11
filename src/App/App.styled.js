import styled from 'styled-components'
import {pics} from './pics/pics'

export const Body = styled.div`
    height: 100%;
    width: 101.2%;
    margin: -8px 0px 0px -8px;
   ${({size}) => size.lapL &&`width: 102%;`}
   ${({size}) => size.lapM &&`width:102%;`}
   ${({size}) => size.lapS &&`width:103%;`}
   ${({size}) => size.mobL &&`width:104%;`}
   ${({size}) => size.mobM &&`width:104%;`}
   ${({size}) => size.mobS &&`width:107%;`}
`
export const BackImg = styled.div`
 ${({current}) => current === 'intro' && `
   background-image: url(${pics.intro});
   background-size: cover;
 `
 }
 ${({current}) => current === 'profile' && `
   background-image: url(${pics.profile});
   background-size: cover;
 `}
 ${({current}) => current === 'project' && `
   background-image: url(${pics.project});
   background-size: cover;
}
 `}
 ${({current}) => current === 'contacts' && `
   background-image: url(${pics.contacts});
   background-size: cover;
 `}
 ${({size}) => size.lapL && `background-position: 0px -400px;`}
 ${({size}) => size.lapM && `background-position: 0px -200px;`}
 ${({size}) => size.lapS && `background-position: 0px -100px;`}
 ${({size}) => size.mobL && `background-position: 0px -50px;`}
 ${({size}) => size.mobM && `background-position: 0px 0px;`}
 ${({size}) => size.mobS && `background-position: -80px 0px;`}
`
