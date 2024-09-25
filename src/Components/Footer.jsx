import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <Link className="nav" to='/About'>About</Link>
        <Link className="nav" to='/Experience'>Experience</Link>
        <Link className="nav" to='/Projects'>Projects</Link>
        <Link className="nav" to='/Contact'>Contact</Link>
      </div>
    </div>
  )
}
