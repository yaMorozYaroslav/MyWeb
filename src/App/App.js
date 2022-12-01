import React from 'react'
import s from './App.module.css'
import {Header} from '../Comps/Header/Header'
import {Router} from '../Router/Router'
import {SideCont} from '../Comps/SideCont/SideCont'

export function App() {
  return (
    <div className={s.body}>
       <section className={s.header}><Header /></section>
       <section><Router/></section>
    </div>
  )
}

