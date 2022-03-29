import React from 'react'
import {parsseISO, formatDistanceToNow} from 'date-fns'

export const TimeAgo = ({timestamp})=>{
	let timeAgo = ''
	if(timestamp){
		const date = parseISO(timestamp)
		const timePriod = formatDistanceToNow(date)
		timeAgo=`${timePeriod}ago`
	}
	 return(
   <span title={timestamp}>
      &nbsp;<i>{timeAgo}</i>
    </span>
	 	)
   }
