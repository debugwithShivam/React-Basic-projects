import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <div className="logo">SocialHub</div>
            <nav className="nav">
                <Link>Home</Link>
                <Link>Profile</Link>
            </nav>
        </header>

    )
}
