import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="container">
                    <h1>About AK Interials</h1>
                    <p>Crafting spaces that tell your story.</p>
                </div>
            </div>

            <div className="container about-content">
                <div className="about-grid">
                    <div className="about-image-col">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Design Studio"
                            className="about-img"
                        />
                    </div>
                    <div className="about-text">
                        <h2>Who We Are</h2>
                        <p>AK Interials is a premier interior and exterior design firm based in India. Established with a vision to transform ordinary spaces into extraordinary living experiences, we have grown into a trusted name in the industry.</p>
                        <p>Our team of passionate designers, architects, and craftsmen work collaboratively to deliver functional, aesthetic, and sustainable design solutions. Whether it's a cozy home, a bustling office, or a commercial complex, we approach every project with creativity and precision.</p>
                        <p>We believe that good design is not just about how it looks, but how it works. That's why we prioritize space planning, ergonomics, and material quality in everything we do.</p>
                    </div>
                </div>
            </div>

            {/* Proprietor Section */}
            <section className="proprietor-section">
                <div className="container">
                    <div className="proprietor-container">
                        <div className="proprietor-img-col">
                            <img
                                src=""
                                alt="Syed Khan - Proprietor"
                                className="proprietor-img"
                            />
                        </div>
                        <div className="proprietor-info">
                            <span className="proprietor-title">The Founder</span>
                            <h2 className="proprietor-name">SYED KHAN</h2>
                            <p>With over 15 years of experience in the interior design industry, Arjun started AK Interials with a simple mission: to make luxury design accessible and functional.</p>
                            <p>Starting his journey as a site supervisor, he learned the intricacies of craftsmanship and material quality firsthand. This ground-level experience allowed him to bridge the gap between abstract design concepts and practical execution.</p>
                            <p>"My philosophy is simple: Every space has a soul, and it's our job to bring it to life. I personally oversee every project to ensure it meets our rigorous standards of quality."</p>
                            <div className="signature">SYED KHAN</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Team Members</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section could go here */}
        </div>
    );
};

export default About;
