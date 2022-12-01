import React from 'react'
import s from './Project.module.css'
import itemImg from './itemImg.png'
export function Project(){
	return (<><div  className={s.container} >
	<img className={s.img} src={itemImg} alt="itemImg" />
	</div></>)
	}
