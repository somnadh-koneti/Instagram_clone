import React from 'react'
import "./css/statuscard.css"

export default function Home1stcard(item) {
  return (
    <div className='homecardcmp'>
        <img src={item.val} className='statuspic'  alt="error" /> 
        <div className='pp'>{item.textval}</div>
    </div> 
  )
}
