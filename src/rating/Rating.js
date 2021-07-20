
import React, { Component } from 'react';


const Rating = ({children}) => {
  const emptyStar = '☆'
  let star = '★'.repeat(Math.round(children)) + emptyStar.repeat(Math.floor(5 - children))
 
  
  return (
    <div>
      <p>{star}</p>
    </div> 
    
  )
  
  
}

export default Rating