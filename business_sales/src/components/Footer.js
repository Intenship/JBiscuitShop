import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky", // Keeps footer at the bottom when the page is short
    bottom: "0",
    width: "100%",
    backgroundColor: "#3f3f3f",
    color: "white",
    padding: "10px 20px",
    marginTop: "auto", // Pushes footer to the bottom when content is short
  };

  const iconContainerStyle = {
    display: "flex",
    gap: "17px",
  };

  const iconStyle = {
    color: "white",
    cursor: "pointer",
    fontSize: "20px",
  };

  return (
    <footer style={footerStyle}>
      <p >© 2025 ,  Apla Crunch</p>
      <div style={iconContainerStyle}>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={iconStyle} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={iconStyle} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={iconStyle} />
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube style={iconStyle} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={iconStyle} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
