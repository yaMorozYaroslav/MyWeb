import React from 'react'
import Zoom from 'react-img-zoom'
import s from './Project.module.css'
import itemImg from './itemImg.jpg'
import picture from './picture.jpg'

export const LaptopZoom = () => 
 <>  <Zoom
  className={s.zoomImg}
  img={itemImg}
  transitionTime={0.5}
  zoomScale={1.5}
  width={500}
  height={220}
     /> 
      <Zoom
  className={s.zoomImg}
  img={picture}
  transitionTime={0.5}
  zoomScale={1.5}
  width={500}
  height={220}
     />
 </>
 
 export const TabletZoom = () =>
 <>
 <Zoom
  className={s.zoomImg}
  img={picture}
  transitionTime={0.5}
  zoomScale={1.5}
  width={500}
  height={220} />
 </>
