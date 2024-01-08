import React from 'react'
import './css/suggestioncard.css';

export default function Suggestioncard (item) {
  return (
    <div className='sugcardmain'>
            <div className='sugcard1st'>
                <div>
                    <img src={item.sugimg} className='sugcardimg'   alt="error" /> 
                </div>
                
                <div >
                    <div className='sugcard1-2-1'>{item.sugtxt}</div>
                    <div className='sugcard1-2-2'>{item.sug_sug}</div>
                </div>
            </div>

            <div className='sugcard2nd'>
                Follow
            </div>
    </div>
  )
}
