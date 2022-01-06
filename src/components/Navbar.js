import React, { Component } from 'react'
import { FaAlignRight, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div class="nav-header">
                        <Link to="/">
                            <FaHome />
                        </Link>
                        <button type='button' className='nav-btn' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/gallery/">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/calendar/">Calendar</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}