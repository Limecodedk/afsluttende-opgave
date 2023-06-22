import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineUser, AiOutlineDown } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-menu'>
        <li><NavLink to="/">Home</NavLink></li>
        <li className="dropdown">
          <span className="dropdown-toggle">HaveService <AiOutlineDown size={".5em"} /></span>
          <ul className="dropdown-menu">
            <li><NavLink to='/viborghaveservice'>Haveservice </NavLink></li>
            <li><NavLink to='/haveservice'>Haveservice slider</NavLink></li>
          </ul>
        </li>
        <li><NavLink to='/vejret'>Vejret</NavLink></li>
        <li><NavLink to='/nyheder'>Nyheder</NavLink></li>
        <li><NavLink to='/energidata'>Energi Data</NavLink></li>
        <li className='adminlogin'><NavLink to='/admin'>Admin <AiOutlineUser /></NavLink></li>
      </ul >
    </nav >
  )
}

export default Navbar