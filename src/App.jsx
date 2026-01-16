import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Watches from './pages/Watches'
import WatchDetail from './pages/WatchDetail'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/watches" element={<Watches/>} />
          <Route path="/watches/:id" element={<WatchDetail/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </div>
  )
}
