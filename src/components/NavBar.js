import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav-bar'>
    <li className='nav-item'>
      <Link to="/">MUSIC</Link>
    </li>
    <li className='nav-item'>
      <Link to="/coming-soon">COMING SOON</Link>
    </li>
  </div>
  )
}

export default NavBar