import React from 'react'
import Zoom from 'react-img-zoom'
import s from './Project.module.css'
import itemImg from './itemImg.jpg'
import picture from './picture.jpg'

export const LgLaptopZoom = () => 
 <>  <Zoom
  img={itemImg}
  transitionTime={0.5}
  zoomScale={1.5}
  width={500}
  height={220}
     /> 
     <Zoom
  img={picture}
  transitionTime={0.5}
  zoomScale={1.5}
  width={500}
  height={220}
     />
 </>
 export const SmLaptopZoom = () =>
 <>   <Zoom
  img={picture}
  transitionTime={0.5}
  zoomScale={1.5}
  width={600}
  height={300}
     />
 </>
 export const TabletZoom = () =>
 <>
 <Zoom
  img={picture}
  transitionTime={0.5}
  zoomScale={2}
  width={500}
  height={300} />
 </>
 
 export const LgPhoneZoom = () =>
 <>
 <Zoom
  img={picture}
  transitionTime={0.5}
  zoomScale={3}
  width={450}
  height={250} />
 </>
 export const SmPhoneZoom = () => 
 <>
 <Zoom
  img={picture}
  transitionTime={0.5}
  zoomScale={3}
  width={300}
  height={200} />
 </>
