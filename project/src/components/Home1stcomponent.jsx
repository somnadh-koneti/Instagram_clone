import React from 'react'
import {status} from "../data/imgs.js";
import Statuscard from './Statuscard.jsx';
import "./css/home1stcomponent.css";
import { postdetails } from '../data/postdetails.js';
import Post1stcard from './Post1stcd.jsx';


function createcard (props)
{
    return(
    <div key={props.id} >
        <Statuscard  val={props.pic} textval={props.text}/>
        
    </div>
    );
}
function postcard(props){
    return(
        <div key={props.id}>
            <Post1stcard acdp={props.accountdp} acname={props.accountname} uptime={props.uploaded_time} 
            uppic={props.uploaded_pic} lk={props.likes} cp={props.caption} cmt={props.no_comments}/>
        </div>
    );
}

export default function Home1stcomponent() {
    return (
    <div>
        <div className='statuscmp'>
            {status.map(createcard)}
        </div>
        <div className='postcmp'>
            {postdetails.map(postcard)}
        </div>
    </div>
    )
}
