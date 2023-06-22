import React from 'react'
import NavbarAdmin from './NavbarAdmin'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <>
      <main className='adminDashbord'>
        <NavbarAdmin />
        <Outlet />
      </main>
    </>
  )
}
export default LayoutAdmin