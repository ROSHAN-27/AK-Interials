import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: "Luxury Apartment",
            category: "Residential",
            img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Tech Startup Office",
            category: "Commercial",
            img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Minimalist Kitchen",
            category: "Kitchen",
            img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Cozy Bedroom Suite",
            category: "Residential",
            img: "https://images.unsplash.com/photo-1616594039964-40891a90d30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Retail Storefront",
            category: "Commercial",
            img: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Modern Villa Exterior",
            category: "Exterior",
            img: "https://images.unsplash.com/photo-1600596542815-37a9a2152ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 7,
            title: "Gyproc Ceiling Design",
            category: "Ceiling",
            img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const categories = ['All', 'Residential', 'Commercial', 'Kitchen', 'Exterior', 'Ceiling'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="projects-page">
            <div className="projects-hero">
                <div className="container">
                    <h1>Our Portfolio</h1>
                    <p>A glimpse into our world of design and execution.</p>
                </div>
            </div>

            <div className="container">
                <div className="filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="portfolio-item">
                            <img src={project.img} alt={project.title} className="portfolio-img" />
                            <div className="portfolio-overlay">
                                <h3 className="portfolio-title">{project.title}</h3>
                                <span className="portfolio-category">{project.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cta-section" style={{ marginTop: 0 }}>
                <div className="container">
                    <h2>Inspired by Our Work?</h2>
                    <p>Let's create something beautiful together.</p>
                    <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: '#fff', color: 'var(--accent-wood)' }}>Start Your Project</Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;
