import React from 'react'
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import "./App.css"
import { Link, Outlet, Route, Routes, BrowserRouter } from 'react-router-dom'

export default function Layout() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="products">Products</Link>
        <Link to="about">About</Link>
      </nav>
      <nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='about' element={<About />} />
        </Routes>
      </nav>
      <Outlet />
    </BrowserRouter>
  )
}
