import React from 'react'
import Logo from './Logo'
import {Link } from 'react-router-dom'

function Navbar() {
  return (
    
      <div>
        <ul>
          <li>
            <Link to="/"><Logo /></Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </div>
  
  )
}

export default Navbar
