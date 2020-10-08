import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              width="32px"
              height="32px"
              src={require("../assets/logo.png")}
              alt="Logo"
            />
            <Typography color="initial" variant="h6">
              &nbsp;GRANTHALAYA
            </Typography>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                Librarian
              </Link>
            </li>
            <span className="logout-btn">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                <Link to="/login" className="link-tag">
                  LOGOUT
                </Link>
              </Button>
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
