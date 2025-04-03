import React from 'react'
import Zoom from 'react-img-zoom'
import itemImg from '/project.png'
import picture from '/project0.png'

export const LgLaptopZoom = () => 
 <> <section style={{margin:'-10px'}}> <Zoom
  img={itemImg}
  transitionTime={0.5}
  zoomScale={1.8}
  width={550}
  height={240}
     /> </section>
    <section style={{margin: '-10px'}}> <Zoom
  img={picture}
  transitionTime={0.5}
  zoomScale={1.8}
  width={550}
  height={240}
     /> </section>
 </>
 export const MdLaptopZoom = () => 
 <> <section style={{margin:'5px'}}> <Zoom
  img={itemImg}
  transitionTime={0.5}
  zoomScale={2}
  width={310}
  height={240}
     /> </section>
    <section style={{margin: '5px'}}> <Zoom
  img={picture}
  transitionTime={0.5}
  zoomScale={2}
  width={310}
  height={240}
     /> </section>
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
  zoomScale={2.3}
  width={450}
  height={250} />
 </>
 export const SmPhoneZoom = () => 
 <>
 <Zoom
  img={picture}
  transitionTime={0.5}
  zoomScale={2.5}
  width={270}
  height={180} />
 </>
