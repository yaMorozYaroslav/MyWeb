import React from 'react'
import {Link} from 'react-router-dom'

export const Panel =()=>{
	return(
   <nav>
      <section>
        <h1 className="header">Redux Panel</h1>

        <div className="panCont">
          <div>
               <Link className="panLink" to="/">Posts</Link>
          </div>
         </div>
        </section>
       </nav>
	)
  }