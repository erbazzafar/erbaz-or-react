import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {

  return (
    <UserContextProvider>
    <h1>Context APIs</h1>
    <Login />
    <Profile/>
    </UserContextProvider>
  )
}

export default App
