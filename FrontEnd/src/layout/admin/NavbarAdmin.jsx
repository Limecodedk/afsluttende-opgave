import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineAppstore, AiOutlineSetting, AiOutlineRocket } from 'react-icons/ai';
import { IoMdCreate } from 'react-icons/io';
import { TfiLayoutSliderAlt } from 'react-icons/tfi';
import { MdOutlineHomeRepairService, MdReviews } from 'react-icons/md';

const NavbarAdmin = () => {
  return (
    <nav className='navbarAdmin'>
      <ul className='navbar-menuAdmin'>
        <li><NavLink to="/admin"><AiOutlineHome /> Home</NavLink></li>
        <li className="dropdownAdmin">
          <span className="dropdown-toggleAdmin"><MdOutlineHomeRepairService /> Services</span>
          <ul className="dropdown-menuAdmin">
            <li><NavLink to="/admin/adminservice"><AiOutlineAppstore /> Alle Services</NavLink></li>
            <li><NavLink to="/admin/createservice"><IoMdCreate /> Create Service</NavLink></li>
          </ul>
        </li>
        <li className="dropdownAdmin">
          <span className="dropdown-toggleAdmin"><MdReviews /> anmeldelser</span>
          <ul className="dropdown-menuAdmin">
            <li><NavLink to="/admin/adminslider"><TfiLayoutSliderAlt /> Alle anmeldelser</NavLink></li>
            <li><NavLink to="/admin/createreviews"><IoMdCreate /> Create anmeldelse</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/"><AiOutlineRocket /> Public</NavLink></li>
        <li><NavLink to="/profile"><AiOutlineSetting /> Min Profil</NavLink></li>
      </ul>
    </nav>
  )
}
export default NavbarAdmin