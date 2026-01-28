import React from 'react';
import { Link } from 'react-router-dom';
import { FaDraftingCompass, FaCouch, FaLightbulb, FaTools, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Transforming Spaces into Elegant Living</h1>
                    <p className="hero-text">Premium interior and exterior design solutions for homes and offices that blend functionality with aesthetic excellence.</p>
                    <Link to="/contact" className="btn btn-primary">Get Free Consultation</Link>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="section services-highlight">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">What We Do</span>
                        <h2>Our Expertise</h2>
                        <p>We offer comprehensive design services tailored to your unique needs and lifestyle.</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <FaCouch className="service-icon" />
                            <h3>Residential Interiors</h3>
                            <p>Customized living rooms, bedrooms, and modular kitchens designed for comfort and style.</p>
                        </div>
                        <div className="service-card">
                            <FaDraftingCompass className="service-icon" />
                            <h3>Commercial Spaces</h3>
                            <p>Modern office layouts and retail space designs that enhance productivity and brand image.</p>
                        </div>
                        <div className="service-card">
                            <FaLightbulb className="service-icon" />
                            <h3>Lighting & Decor</h3>
                            <p>Expert lighting layouts and false ceiling (Gyproc) works to set the perfect ambiance.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/services" className="btn btn-outline">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-us">
                <div className="container">
                    <div className="why-grid">
                        <div className="why-content">
                            <span className="section-subtitle">Why Choose Us</span>
                            <h2>We Bring Your Dream Spaces to Life</h2>
                            <p>With years of experience and a passion for design, AK Interials delivers projects that exceed expectations.</p>
                            <ul>
                                <li>
                                    <FaCheckCircle className="why-icon" />
                                    <span>Personalized Design Consultation</span>
                                </li>
                                <li>
                                    <FaCheckCircle className="why-icon" />
                                    <span>High-Quality Materials & Finishes</span>
                                </li>
                                <li>
                                    <FaCheckCircle className="why-icon" />
                                    <span>On-Time Project Delivery</span>
                                </li>
                                <li>
                                    <FaCheckCircle className="why-icon" />
                                    <span>Transparent Pricing</span>
                                </li>
                            </ul>
                        </div>
                        <div className="why-image">
                            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Modern Living Room" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="section projects-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Portfolio</span>
                        <h2>Featured Projects</h2>
                    </div>
                    <div className="project-grid">
                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Luxury Bedroom" className="project-img" />
                            <div className="project-overlay">
                                <h3 className="project-title">Modern Bedroom</h3>
                                <span className="project-category">Residential</span>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Corporate Office" className="project-img" />
                            <div className="project-overlay">
                                <h3 className="project-title">Tech Hub Office</h3>
                                <span className="project-category">Commercial</span>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modular Kitchen" className="project-img" />
                            <div className="project-overlay">
                                <h3 className="project-title">Sleek Modular Kitchen</h3>
                                <span className="project-category">Interior</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/projects" className="btn btn-outline">View Portfolio</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Testimonials</span>
                        <h2>What Our Clients Say</h2>
                    </div>
                    <div className="testimonial-slider">
                        <div className="testimonial-card">
                            <FaQuoteLeft className="quote-icon" />
                            <p className="client-text">"AK Interials completely transformed our home. The attention to detail and the quality of work was outstanding. Highly recommended!"</p>
                            <h4 className="client-name">Rahul Sharma</h4>
                            <span className="client-role">Homeowner, Mumbai</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Redefine Your Space?</h2>
                    <p>Contact us today for a free consultation and quote.</p>
                    <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: '#fff', color: 'var(--accent-wood)' }}>Contact Us Now</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
