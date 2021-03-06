import React, { useState } from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import PortraitIcon from "@material-ui/icons/Portrait";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { logOut } from '../../redux'

const Navbar = ({ active }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const auth = useSelector(state => state.firebase.auth); 
  const profile = useSelector(state=> state.firebase.profile);

  const dispatch = useDispatch()

  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleLogout = () =>{
    dispatch(logOut())
  }

  if (!auth.uid) return <Redirect to='/login' /> 

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              width="32px"
              height="32px"
              src="/assets/images/logo.png"
              alt="Logo"
            />
            <Typography color="initial" variant="h6">
              &nbsp;GRANTHALAYA
            </Typography>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <CloseIcon fontSize="medium" style={{backgroundColor: "#efefef"}}/>
            ) : (
              <MenuIcon fontSize="large" style={{color: "#eee"}}/>
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className={
                  active === "home" ? "nav-links link-active" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                <HomeIcon />
                &nbsp; Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className={
                  active === "profile" ? "nav-links link-active" : "nav-links"
                }
              >
                <AccountCircleIcon />
                &nbsp; Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className={
                  active === "contact" ? "nav-links link-active" : "nav-links"
                }
              >
                <EmailIcon />
                &nbsp; Contact Us
              </Link>
            </li>
            { profile.is_admin ? 
              (
                <li className="nav-item">
                  <Link to="/librarian" 
                        className={ active === "librarian" ? "nav-links link-active" : "nav-links"}
                        >
                    <PortraitIcon />
                    &nbsp; Librarian
                  </Link>
                </li> 
              ) : <></>
              
            }
            <span className="logout-btn-block">
              <Button
                className="logout-btn"
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                onClick = {handleLogout}
              >
                <PowerSettingsNewIcon />
                &nbsp; LOGOUT
              </Button>
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
