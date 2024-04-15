import { useState } from 'react'
import UserContextProvider from "./context/UserContextProvider"
import './App.css'
import Profile from './components/Profile'
import Login from "./components/Login"

function App() {

  return (
    <UserContextProvider>
      <h1>React with context API , redux, redux-toolkit</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
