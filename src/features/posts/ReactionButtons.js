import React from 'react'

const reactionEmoji = {
	percent: '%',
	buck: '$',
	sharp: '#',
	dog: '@',
	and: '&'
}
export const ReactionButtons = ({post})=>{
	const reactionButtons = Object.entries(reactionEmoji)
	                                   .map(([name,emoji]))=>{                               	
	    return(
      <button 
             key={name} 
             type="button" 
             className="muted-button reaction-buuton">
          {emoji} {post.reactions[name]}
       </button>
	    	)
         })
    return <div>{reactionButtons}</div>
}