import React from 'react'
import s from './App.module.css'
import {Header} from '../Comps/Header/Header'
import {Router} from '../Router/Router'
import {useSelector} from 'react-redux'

export function App() {
	
	
const selectSection = state => state.open.section
const section = useSelector(selectSection)

	/* let background;
	if(section === 'intro')background = 's.backIntro'
	if(section === 'profile')background='s.backProfile'
console.log(background)
React.useEffect(()=>{

	},[]) */
  return (
    <div className={s.body}>
      <div className={section==='intro'?s.backIntro:null}>
       <section className={s.header}><Header /></section>
       <section className={s.router}><Router/></section>
      </div>
    </div>
  )
}

