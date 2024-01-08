import React from 'react'
import images from "../data/imgs.js";
import Card from "./Card.jsx"
import "./css/left_logos.css";


function createcard(props)
{
  return(
    <div key={props.id} >
      <Card  val={props.pic} textval={props.text}/>
    </div>
  );
}

export default function Leftlogos() {
  return (
    <div className='tag'>
        <div >
            <img src="images/mainlogo.png" className='mainlogo'  alt="error" />
        </div>

        <div className='subtag'>

            <div className='subchild'>
              {images.map(createcard)}
            </div>

            <div className='footer'>
              <Card  val={"images/Hamburger.png"} textval={"More"}/>
            </div>

        </div>
    </div>
  )
}
