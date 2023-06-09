import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="bg-blue-600 py-4">
        <div className="header-content">
          <div className="header-left">
              <Link to="/" className="header-button">Home</Link>
            <Link to="/Product" className="header-button">Order</Link>
          </div>
        </div>
      </header>

      <main className="py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <form className="contact-form">
          <h2 className="text-2xl font-bold text-center mb-8">Send us a message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </main>

      <footer className="bg-blue-600 py-4 text-white text-center">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Use Case</Link></li>
              <li><Link to="/Gallary">Gallary</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Features</h3>
            <ul>
              <li><Link to="/">Workflow</Link></li>
              <li><Link to="/">Automation</Link></li>
              <li><Link to="/">Team Management</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><Link to="/">Help</Link></li>
              <li><Link to="/">FAQs</Link></li>
              <li><Link to="/">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <p>Contact Us</p>
          <p>+1 123-456-7890</p>
          <p>info@mobilesupplysystem.com</p>
          <p>112, Mahapragya Vihar, Behind Celebration Mall, Bhuwana, Udaipur, Rajasthan 313001</p>
        </div>
        <p>&copy; 2023 Mobile Supply System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
