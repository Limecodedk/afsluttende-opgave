import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarAdmin = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-menu'>
        <li><NavLink to="/admin">ADMINHome</NavLink></li>
        <li><NavLink to="/admin/createservice">Create Service</NavLink></li>
        <li><NavLink to="/admin/adminservice">Edit service</NavLink></li>
        <li><NavLink to="/">Public</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavbarAdmin