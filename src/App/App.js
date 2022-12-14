import React from 'react'
import s from './App.module.css'
import {Header} from '../Comps/Header/Header'
import {Router} from '../Router/Router'
import {useSelector} from 'react-redux'

export function App() {
	
	
const selectSection = state => state.open.section
const section = useSelector(selectSection)
//console.log(section)
  return (
    <div className={s.body}>
       <section className={s.header}><Header /></section>
       <section className={s.router}><Router/></section>
      
    </div>
  )
}

