import styled from 'styled-components'
import {pics} from './pics'

export const Body = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* Neutralize default 8px body margins without viewport overflow. */
    width: calc(100% + 16px);
    margin: -8px;
`
export const BackImg = styled.div`
  flex: 1;
  min-width: 0;
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
