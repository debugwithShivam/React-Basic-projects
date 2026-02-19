import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <header>
        <Link to='/' >Home</Link>
        <Link to='/About' >About</Link>
        <Link to='/Product' >Product</Link>
    </header>      
    <section>
      <Outlet/>
    </section>
    </>
  )
}
