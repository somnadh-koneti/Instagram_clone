import React from 'react'
import { sugprofile } from '../data/suggestions'
import Suggestioncard from './Suggestioncard'
import './css/home2ndsuggestion.css';

function sugcard(props){
    return(
        <div key={props.id}>
            <Suggestioncard sugimg={props.pic} sugtxt={props.text} sug_sug={props.sug} />
        </div>
    ) 

}
export default function Home2ndsuggestions() {
  return (
    <div className='hmsugmain'>
        <div className='hmsug1'>
            <div className='hmsug1-1'>
                <div>
                    <img src='images/pexels-andrea-piacquadio-762041.jpg' className='sugdpimg'    alt="error" /> 
                </div> 
                <div>
                    <div className='hmsug1-1-2-1'>andrea_J</div>
                    <div className='hmsug1-1-2-2'>andrea_James</div>
                </div>
            </div>

            <div className='hmsug1-2'>
                Switch
            </div>

        </div>
            
        <div className='hmsug2'>
            <div className='hmsug2-1'>Suggested for you</div>
            <div className='hmsug2-2'>See All</div>
        </div>
        <div>
            {sugprofile.map(sugcard)}
        </div>
    </div>
  )
}
