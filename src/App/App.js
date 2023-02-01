import React from 'react';
import s from './App.module.css';
import {Header} from '../Comps/Header/Header'
import {Footer} from '../Comps/Footer/Footer'
import {Router} from '../Router/Router'
import {useSelector} from 'react-redux'
import classnames from 'classnames'

export function App() {
	
	
const selectSection = state => state.open.section
const section = useSelector(selectSection)



  return (
    <div className={s.body}>
      <div className={classnames(section==='intro'&&s.intro,
		                         section==='profile'&&s.profile,
		                         section==='project'&&s.project,
		                         section==='contacts'&&s.contacts
		                                                              )} > 
       <section className={s.header}><Header /></section>
       <section className={s.router}><Router/></section>
       <section className={s.footer}><Footer /></section>
       </div>
    </div>
  )
}

