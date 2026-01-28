import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Home Interior Design",
            description: "We create personalized home interiors that reflect your style and personality. From cozy living rooms to serene bedrooms, we ensure every corner of your home is perfect.",
            features: ["Space Planning", "Custom Furniture", "Color Consultation", "Soft Furnishings"],
            img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Office & Commercial Interiors",
            description: "Boost productivity and impress clients with our modern office design solutions. We balance aesthetics with functionality to create inspiring workspaces.",
            features: ["Ergonomic Layouts", "Branding Integration", "Conference Rooms", "Reception Areas"],
            img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Modular Kitchens",
            description: "Experience the perfect blend of style and utility with our modular kitchen designs. We optimize storage and workflow for a seamless cooking experience.",
            features: ["L-Shaped/U-Shaped Layouts", "High-Gloss Finishes", "Smart Storage Solutions", "Premium Fittings"],
            img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Gyproc False Ceiling & Partitions",
            description: "Enhance your interiors with modern false ceilings and efficient partitions. We use high-quality Gyproc materials for durable and stylish finishes.",
            features: ["Cove Lighting", "Soundproofing", "Decorative Molds", "Drywall Partitions"],
            img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Wardrobe & Furniture Design",
            description: "Maximize space with our custom wardrobe and furniture solutions. We design pieces that fit perfectly into your layout and meet your storage needs.",
            features: ["Walk-in Closets", "Sliding Wardrobes", "Study Units", "TV Units"],
            img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Exterior Design",
            description: "Make a lasting first impression with our exterior design services. We enhance the curb appeal of your property with innovative facade designs.",
            features: ["Facade Treatment", "Landscape Planning", "Exterior Lighting", "Material Selection"],
            img: "https://images.unsplash.com/photo-1600596542815-37a9a2152ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="services-page">
            <div className="services-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Comprehensive interior and exterior design solutions for every need.</p>
                </div>
            </div>

            <div className="container services-list">
                {services.map(service => (
                    <div key={service.id} className="service-item">
                        <div className="service-info">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <ul className="service-bullets">
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="service-img-container">
                            <img src={service.img} alt={service.title} className="service-img" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="cta-section">
                <div className="container">
                    <h2>Have a Project in Mind?</h2>
                    <p>Let's discuss how we can help you transform your space.</p>
                    <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: '#fff', color: 'var(--accent-wood)' }}>Get a Quote</Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
