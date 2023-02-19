import React from 'react';
import s from './App.module.css';
import {Header} from '../Comps/Header/Header'
import {Footer} from '../Comps/Footer/Footer'
import {Router} from '../Router/Router'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import classnames from 'classnames'

const Body = styled.div`
    height: 100%;
    width: 101.2%;
    margin: -8px 0px 0px -8px;
`

export function App() {
	
const section = useSelector(state => state.open.section)

  return (
    <Body>
      <div className={classnames(section==='intro'&&s.intro,
		                         section==='profile'&&s.profile,
		                         section==='project'&&s.project,
		                         section==='contacts'&&s.contacts
		                                                              )} > 
       <section className={s.header}><Header /></section>
       <section className={s.router}><Router/></section>
       <section className={s.footer}><Footer /></section>
       </div>
    </Body>
  )
}

