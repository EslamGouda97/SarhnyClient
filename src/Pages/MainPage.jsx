import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Shared/NavBar'
import Footer from '../Shared/Footer'

export default function MainPage() {
  return (
    <>
     <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
