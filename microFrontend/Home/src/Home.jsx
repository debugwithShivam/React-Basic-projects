import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="home">
      <section className="home-hero">
        <h1>Welcome</h1>
        <p>Modern UI. Real engineering. No tutorial vibes.</p>
      </section>

      <section className="home-grid">
        <div className="home-card">
          <h2>Learn</h2>
          <p>
            Understand how JavaScript, browsers, and systems really work.
          </p>
        </div>

        <div className="home-card">
          <h2>Build</h2>
          <p>
            Create real projects with React, APIs, and proper architecture.
          </p>
        </div>

        <div className="home-card">
          <h2>Scale</h2>
          <p>
            Move from small apps to production-level systems.
          </p>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home
