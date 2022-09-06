import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import CreateUser from './pages/form-user/create'
import UpdateUser from './pages/form-user/update/index.tsx'
import NavBar from './components/navbar'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/update' element={<UpdateUser />} />
      </Routes>
    </Router>
  )
}

export default App
