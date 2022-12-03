import React from 'react'
import s from './App.module.css'
import {Header} from '../Comps/Header/Header'
import {Router} from '../Router/Router'
import {NavBar} from '../Comps/NavBar/NavBar'

export function App() {
  return (
    <div className={s.body}>
     <NavBar/>
       <section className={s.header}><Header /></section>
       <section className={s.router}><Router/></section>
      
    </div>
  )
}

