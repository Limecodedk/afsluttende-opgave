import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineAppstore, AiOutlineSetting, AiOutlineRocket } from 'react-icons/ai';
import { IoMdCreate } from 'react-icons/io';


const NavbarAdmin = () => {
  return (
    <nav className='navbarAdmin'>
      <ul className='navbar-menuAdmin'>
        <li><NavLink to="/admin"><AiOutlineHome /> Home</NavLink></li>
        <li><NavLink to="/admin/createservice"><IoMdCreate /> Create Service</NavLink></li>
        <li><NavLink to="/admin/adminservice"><AiOutlineAppstore /> Edit service</NavLink></li>
        <li><NavLink to="/"><AiOutlineRocket /> Public</NavLink></li>
        <li><NavLink to="/profile"><AiOutlineSetting /> Min Profil</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavbarAdmin