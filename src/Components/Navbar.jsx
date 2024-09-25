import React, { useEffect, useState } from 'react'
import { NavMenu } from './Data'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
    let [menuICon,setmenuICon]=useState(true);
    // let closemenu= ()=>setmenuICon(!menuICon);


    let [menuiconbar,setmenuiconbar]=useState(true);
    let closemenubar= ()=>setmenuiconbar(!menuiconbar);
    let nav= NavMenu.map((v,i)=>{
        return(
            <li key={i}><Link onClick={closemenubar} className='nav-links' to={v.path}>{v.text}</Link></li>
        )
    });



  return (
    <div className='nav-container'>
    
        <h3 className="logo-text">
            <Link className='logo-text' to='/'>John Doe</Link>
        </h3>
      <nav className="navbar">
      <div className="menuIcon">
            <FontAwesomeIcon onClick={closemenubar} className='menuiconbar' icon={menuiconbar ? faBars : faTimes}/>
        </div>
        <ul className={menuiconbar ? 'navbar-menu' : 'navbar-menu active'}>
            {nav}
        </ul>
      </nav>
    </div>
  )
}
