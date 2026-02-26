import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
    <div>
      <Header/>
    </div>
     {/* <main className="flex-grow"> */}
        <Outlet />
      {/* </main> */}
    <section>
      <Footer/>
    </section>
    </>
  )
}
