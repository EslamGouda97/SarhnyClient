import React from 'react'
import {Routes,Route } from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Messages from '../Components/Messages'
import NotFoundPage from '../Pages/NotFoundPage'
import Home from '../Components/Home'
import UserGuard from '../Components/UserGuard'
import UserProfile from '../Components/profile/UserProfile'
import SendMessage from '../Components/SendMessage'

export default function AppRoutes() {
  return (
    <>
<Routes>
<Route element={ <MainPage />}>
<Route path="/" element={<Home />} />
<Route path="messages" element={ <UserGuard><Messages /></UserGuard>} />
<Route path="login" element={<Login />} />
<Route path="register" element={<Register />} />
<Route path="messageTo/user/:id" element={<SendMessage/>} />
<Route path="profile" element={<UserGuard><UserProfile/></UserGuard>} />
</Route>
<Route path='*' element={ <NotFoundPage />}/>
</Routes>
    </>
  )
}
