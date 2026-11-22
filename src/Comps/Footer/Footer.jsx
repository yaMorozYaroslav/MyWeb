import React from 'react'
import s from './Footer.module.css'

export const Footer = () => {
	return (<div className={s.container}>
	<section className={s.author}> ©Yaroslav Moroz, {new Date().getFullYear()} </section>
	<section className={s.rights}>All Rights Reserved</section>
	              </div>)
	}
