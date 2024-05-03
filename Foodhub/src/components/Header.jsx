import React, { useEffect } from 'react';
import { useState } from 'react';
import {LOGO_URL} from '../utils/Constant'


function Header() {
  
const [btnText,setText] = useState("Login");

// console.log("header rendered");

// useEffect(()=>{
//   console.log("UseEffect rendered");
// })

  return (
    <div className="header">
    <img src= {LOGO_URL}/>
    <div className="nav-items">
    <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About Us</a>
  </li>
  <button className='btn'
  onClick={()=>{
    btnText==="Login"?setText("Logout"):setText("Login");
  }}>
   {btnText}
   </button>
</ul>
    </div>
    </div>
  )
}

export default Header
