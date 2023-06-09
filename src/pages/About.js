import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <header className="bg-blue-600 py-4">
        <nav>
          <ul className="flex space-x-4 text-white">
          <li>
              <Link to="/" className="header-button">Home</Link>
            </li>
            <li>
              <Link to="/about" className="header-button">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About</h1>

        <div className="card-container">
          <div className="card">
            <h2 className="card-title">Our Mission</h2>
            <p className="card-description">
              At Mobile Supply System, our mission is to connect mobile device manufacturers, retailers, and end-users through a seamless supply chain process. We are dedicated to delivering the latest mobile technologies, exceptional quality, and outstanding service to our clients.
            </p>
          </div>

          <div className="card">
            <h2 className="card-title">Our Services</h2>
            <p className="card-description">
              We offer a range of services including product sourcing, warehousing and distribution, inventory management, logistics and transportation, and quality assurance. Our goal is to provide comprehensive solutions and optimize the supply chain process.
            </p>
          </div>

          <div className="card">
            <h2 className="card-title">Our Commitment</h2>
            <p className="card-description">
              We are committed to delivering cutting-edge mobile devices, building strong partnerships, providing exceptional customer service, and promoting sustainability and ethical practices in the mobile device industry. Our focus is on customer satisfaction and long-term success.
            </p>
          </div>
        </div>

        <p className="text-lg text-center">
          For any inquiries, partnerships, or collaboration opportunities, please don't hesitate to contact us. We are excited to serve your mobile device supply needs and contribute to your success.
        </p>
      </main>

      <footer className="bg-blue-600 py-4 text-white text-center">
        <p>&copy; 2023 Mobile Supply System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
