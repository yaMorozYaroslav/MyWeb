import React from 'react'
import Zoom from 'react-img-zoom'
import s from './Project.module.css'
import itemImg from './itemImg.jpg'
import picture from './picture.jpg'

export const LgLaptopZoom = () => 
 <> <section style={{margin:'5px'}}> <Zoom
  img={itemImg}
  transitionTime={0.5}
  zoomScale={2}
  width={500}
  height={240}
     /> </section>
    <section style={{margin: '5px'}}> <Zoom
  img={picture}
  transitionTime={0.5}
  zoomScale={2}
  width={500}
  height={240}
     /> </section>
 </>
 export const SmLaptopZoom = () =>
 <>   <Zoom
  img={picture}
  transitionTime={0.5}
  zoomScale={1.5}
  width={650}
  height={350}
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
  zoomScale={2.5}
  width={450}
  height={250} />
 </>
 export const SmPhoneZoom = () => 
 <>
 <Zoom
  img={picture}
  transitionTime={0.5}
  zoomScale={2.5}
  width={300}
  height={180} />
 </>
