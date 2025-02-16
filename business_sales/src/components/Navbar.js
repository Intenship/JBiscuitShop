import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import logo from "./assets/apla-crunch-logo.png"; // Ensure correct path

const Navbar = () => {
  const [activelink, setActiveLink] = useState('');

  const handleClick = (link) => {
      setActiveLink(link);
      // Close the navbar toggle when a link is clicked
      const toggleButton = document.getElementById('navbarSupportedContent');
        if (toggleButton.classList.contains('show')) {
            toggleButton.classList.remove('show');
        }
  };
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#434242', color: 'white' }}>
      <div className="container-fluid">
        {/* Logo with brand name */}
        <a className="navbar-brand d-flex align-items-center" href="#" style={{ color: 'white' }}>
          <img
            src={`${process.env.PUBLIC_URL}/image/logo.png`}
            alt="Apla Crunch Logo"
            style={{ height: '50px', marginRight: '15px' }} // Increased height & margin
          />
          <span style={{ fontSize: '1.8rem', fontWeight: 'bold', marginRight: '15px' }}>Apla Crunch</span>
        </a>


        {/* Mobile Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " onClick={() => handleClick('/Biscuit-Shop')} style={{ color: activelink === '/Biscuit-Shop' ? 'yellow' : 'white',fontSize: '1.3rem',marginRight:'15px' }} to="/Biscuit-Shop">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " onClick={() => handleClick('bill')} style={{ color: activelink === 'link' ? 'yellow' : 'white',fontSize: '1.3rem',marginRight:'15px' }} to="/bill">
              Bill
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/link" style={{ fontSize: '1.3rem', color: 'white' }}>Bill</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
