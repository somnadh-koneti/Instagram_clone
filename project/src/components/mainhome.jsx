import React from 'react'
import Leftlogos from './Leftlogos.jsx';
import "./css/mainhome.css";
import { Outlet } from 'react-router-dom'

export default function Mainhome() {
return (
    <div className='main'>
    
        <div className='sub1'>
            <Leftlogos />
        </div>

        <div className='sub2'>
            <Outlet/>
        </div>
</div>
)
}
