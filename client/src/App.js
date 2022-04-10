import React from 'react';

  const Func=({numbers})=>{
  	let place = []
    for(let number of numbers){
    	if(number %2 !== 0){
    		place.push(number)
    	}
      }
            
          	return place;
  }

export const App =()=>{
	let numbers = [1,2,3,4,5,6,7]
	return(
      <Func numbers={numbers}/>
	);
}