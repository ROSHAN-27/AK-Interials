import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <Link to="/" className="footer-logo">
                        AK <span className="logo-accent">Interials</span>
                    </Link>
                    <p className="footer-desc">
                        Transforming spaces into elegant living experiences. We specialize in residential and commercial interior design, delivering quality and creativity in every project.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><FaFacebookF /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                        <a href="#" className="social-icon"><FaLinkedinIn /></a>
                        <a href="#" className="social-icon"><FaWhatsapp /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/projects">Portfolio</Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Our Services</h3>
                    <ul className="footer-links">
                        <li><Link to="/services">Home Interiors</Link></li>
                        <li><Link to="/services">Office Design</Link></li>
                        <li><Link to="/services">Modular Kitchens</Link></li>
                        <li><Link to="/services">Gyproc False Ceiling</Link></li>
                        <li><Link to="/services">Renovation</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact Info</h3>
                    <ul className="contact-info">
                        <li>
                            <FaMapMarkerAlt className="contact-icon" />
                            <span>HP Gas Road, Opp to Garuda Parking, Madanapalli (517325), Andhra Pradesh.</span>
                        </li>
                        <li>
                            <FaPhone className="contact-icon" />
                            <span>+91 98855 57003</span>
                        </li>
                        <li>
                            <FaEnvelope className="contact-icon" />
                            <span>syed.saad1355@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} AK Interials. All Rights Reserved.</p>
                    <p>Developed by <a href="https://roshan27.github.io/">Roshan</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
