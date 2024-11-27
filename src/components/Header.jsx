import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when the location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src="./logo.png" alt="Logo" className="logo-image" />
          </Link>
        </div>
        <nav className={`header-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <button className="close-menu" onClick={toggleMobileMenu}>&times;</button>
          <ul className="menu-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/subscribe">Subscribe</Link></li>
            <li><Link to="/next-event">Next Event</Link></li>
            <li><Link to="/find-out-more">Find Out More</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
          </ul>
        </nav>
        <button className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <span className="close-icon">&times;</span>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
