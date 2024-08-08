import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

import { Link } from 'react-router-dom';
import './Footer.css'; // Optional: For additional custom styles

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Welcome to our restaurant, where we serve delicious food made with the freshest ingredients. Join us for a memorable dining experience.</p>
          </div>

          {/* Contact Information */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              <i className="bi bi-geo-alt-fill"></i> Lane no-11,Clement Town,Dehradun
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> 8433006405
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> manojdalla420@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/more" className="text-light">Menu</Link></li>
              <li><Link to="/about" className="text-light">About</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="row mt-3">
          <div className="col text-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light m-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light m-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light m-2">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} 18 Square Cafe and Restro. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
