import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import '../components/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/logo.png" alt="AK Logo" className="logo-img" />
                    <span className="logo-text">AK <span className="logo-accent">Interials</span></span>
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" onClick={closeMenu}>About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link" onClick={closeMenu}>Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
                        </li>
                        <li className="nav-item mobile-only">
                            <a href="tel:+919876543210" className="nav-cta"><FaPhoneAlt /> Call Now</a>
                        </li>
                    </ul>
                </nav>

                <div className="header-cta desktop-only">
                    <Link to="/contact" className="btn btn-primary">Get Consultation</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
