import React from 'react'
import Zoom from 'react-img-zoom'
import s from './Project.module.css'
import itemImg from './itemImg.jpg'
import picture from './picture.jpg'

export const LaptopZoom = () => 
 <><section className={s.zoomImg0}>  <Zoom
  img={itemImg}
  transitionTime={0.5}
  zoomScale={1.5}
  width={500}
  height={220}
     /> </section>
     <Zoom
  className={s.zoomImg1}
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
  zoomScale={2}
  width={500}
  height={200} />
 </>
 
 export const PhoneZoom = () => 
 <>
 <Zoom
  className={s.zoomImg}
  img={picture}
  transitionTime={0.5}
  zoomScale={1.5}
  width={500}
  height={220} />
 </>
