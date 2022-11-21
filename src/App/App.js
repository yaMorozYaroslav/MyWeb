import React from 'react'
import s from './App.module.css'
import {Header} from '../comps/Header/Header'

export function App() {
  return (
    <div className={s.body}>
       <section className={s.header}><Header /></section>
       
    </div>
  )
}

