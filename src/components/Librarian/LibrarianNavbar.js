import React, { useState } from "react";
import "./LibrarianNavbar.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import CommentIcon from "@material-ui/icons/Comment";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import BookIcon from '@material-ui/icons/Book';
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

const LibrarianNavbar = ({ selected, setSelected }) => {
  const [click, setClick] = useState(false);
  const handleClick = (props) => {
    setClick(!click);
    setSelected(props);
  };
  return (
    <>
      <nav className="librarian-navbar">
        <div className="librarian-navbar-container">
          <Link to="/" className="librarian-navbar-logo">
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
          <div className="librarian-menu-icon" onClick={handleClick}>
            {click ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>
          <ul
            className={
              click ? "librarian-nav-menu active" : "librarian-nav-menu"
            }
          >
            <li
              className={
                selected === "users"
                  ? "librarian-nav-item link-active"
                  : "librarian-nav-item"
              }
              onClick={() => handleClick("users")}
            >
              <PersonIcon /> &nbsp;&nbsp;{
                selected === "users" ?
                'Users' : ''
              }  
            </li>
            <li
              className={
                selected === "books"
                  ? "librarian-nav-item link-active"
                  : "librarian-nav-item"
              }
              onClick={() => handleClick("books")}
            >
              <MenuBookIcon /> &nbsp;&nbsp;{
                selected === "books" ?
                'Books' : ''
              }  
            </li>
            <li
              className={
                selected === "reservations"
                  ? "librarian-nav-item link-active"
                  : "librarian-nav-item"
              }
              onClick={() => handleClick("reservations")}
            >
              <BookIcon /> &nbsp;&nbsp;{
                selected === "reservations" ?
                'Reservations' : ''
              } 
            </li>
            <li
              className={
                selected === "messages"
                  ? "librarian-nav-item link-active"
                  : "librarian-nav-item"
              }
              onClick={() => handleClick("messages")}
            >
              <CommentIcon /> &nbsp;&nbsp;{
                selected === "messages" ?
                ' Messages' : ''
              }
                
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                <HomeIcon /> &nbsp;{
                selected === "home" ?
                'Home' : ''
              }  
              </Link>
            </li>
            <span className="librarian-logout-btn-block">
              <Button
                className="librarian-logout-btn"
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                to="/login"
                component={Link}
              >
                <PowerSettingsNewIcon />
                &nbsp;&nbsp; LOGOUT
              </Button>
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default LibrarianNavbar;
