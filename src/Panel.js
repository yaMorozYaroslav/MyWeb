import React from 'react'
import {Link} from 'react-router-dom'

export const Panel =()=>{
	return(
   <nav>
      <section>
        <h1>Redux Panel</h1>

        <div className="panCont">
          <div className="panLink">
               <Link to="/">Posts</Link>
          </div>
         </div>
        </section>
       </nav>
	)
  }