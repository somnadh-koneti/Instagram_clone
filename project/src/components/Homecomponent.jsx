import React from 'react';
import Home1stcomponent from './Home1stcomponent';
import "./css/homecomponent.css";
import Home2ndsuggestions from './Home2ndsuggestions.jsx';

export default function Homecomponent() {
    return (
    <div className='homemain'>
        <div className='home1'>
            <Home1stcomponent/>
        </div>
        <div className='home2'> 
            <div>
                <Home2ndsuggestions/>
            </div>
        </div>


    </div>
    )
}
