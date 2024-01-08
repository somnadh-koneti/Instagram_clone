import React from 'react'
import './css/card.css';
import { NavLink } from 'react-router-dom';

function Card(item) {

  
  return (

    <NavLink to={item.textval} className='side1'>
    <div className="side">
        <img src={item.val} className='pic' alt="error" /> 
        <p >{item.textval} </p>
    </div>
    </NavLink>
  
  );
}

export default Card;
