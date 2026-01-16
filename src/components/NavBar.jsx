import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({to, children}) => (
  <NavLink to={to} className={({isActive}) => `px-4 py-2 rounded ${isActive? 'bg-gray-900 text-white' : 'text-gray-700 hover:text-gray-900'}`}>
    {children}
  </NavLink>
)

export default function NavBar(){
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-semibold">Refurbished Watches</div>
        <nav className="flex items-center space-x-2">
          <Link to="/">Home</Link>
          <Link to="/watches">Watches</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
