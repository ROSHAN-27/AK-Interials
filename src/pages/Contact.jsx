import React, { useState, useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Placeholder keys - User needs to replace these in their EmailJS account
    const SERVICE_ID = 'service_xxxxxx'; // Replace with actual Service ID
    const TEMPLATE_ID = 'template_xxxxxx'; // Replace with actual Template ID
    const PUBLIC_KEY = 'your_public_key'; // Replace with actual Public Key

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Thank you for contacting us! We will get back to you shortly.');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="container">
                    <h1>Get In Touch</h1>
                    <p>We'd love to hear from you. Let's start a conversation.</p>
                </div>
            </div>

            <div className="container contact-content">
                <div className="contact-grid">
                    <div className="contact-info-col">
                        <div className="contact-info-card">
                            <h2>Contact Information</h2>

                            <div className="info-item">
                                <FaPhoneAlt className="info-icon" />
                                <div className="info-text">
                                    <h3>Phone</h3>
                                    <p>+91 98855 57003</p>
                                    <p>+91 95810 73020</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <FaEnvelope className="info-icon" />
                                <div className="info-text">
                                    <h3>Email</h3>
                                    <p>syed.saad1355@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <FaMapMarkerAlt className="info-icon" />
                                <div className="info-text">
                                    <h3>Address</h3>
                                    <p>HP Gas Road, Opp to Garuda Parking, </p>
                                    <p>Madanapalli (517325), Andhra Pradesh.</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <FaWhatsapp className="info-icon" />
                                <div className="info-text">
                                    <h3>WhatsApp</h3>
                                    <p>+91 98855 57003</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-col">
                        <div className="contact-form-container">
                            <h2>Send a Message</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="user_name"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="user_phone"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message / Requirements</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        className="form-control"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="map-container">
                    <iframe
                        title="Google Map Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.7766201240424!2d78.50323752360016!3d13.54929030195288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb26520cab0218f%3A0xbe41dbbd4b94700e!2sAK%20INTERIALS!5e0!3m2!1sen!2sin!4v1769524696030!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
