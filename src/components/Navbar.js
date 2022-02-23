import React, { useState, useEffect } from 'react'
import { FaAlignRight, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Navbar({ isLoggedIn }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    function checkLogin() {
        if (isLoggedIn === true) {
            console.log('x');
            return (
                <Link to="/profile/">Perfil</Link>
            )
        } else {
            console.log('y');
            return (
                <Link to="/login/">Login</Link>
            )
        }
    }

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className="nav-header">
                    <Link to="/">
                        <FaHome />
                    </Link>
                    <button type='button' className='nav-btn' onClick={handleToggle}>
                        <FaAlignRight className='nav-icon' />
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/gallery/">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/calendar/">Calendar</Link>
                    </li>
                    <li>
                        {checkLogin()}
                    </li>
                </ul>
            </div>
        </nav>
    )
}