import React from 'react'

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper px1">
            <a href="/" className="brand-logo">React + TS</a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Список дел</a></li>
                <li><a href="/">О списке</a></li>
            </ul>
        </div>
    </nav>
)