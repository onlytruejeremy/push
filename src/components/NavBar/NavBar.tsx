import React from "react";
import { NavLink } from "react-router-dom";
import { FiVideo, FiMenu, FiX } from "react-icons/fi";
import "./NavBar.css";
import useToggle from "../../hooks/useToggle";
const NavBar = () => {
  const { open, toggle } = useToggle();
  return (
    <header className="header">
      <nav className={`nav ${open && "nav--active"}`}>
        <NavLink to="/" className="nav__logo">
          <FiVideo className="self-center text-2xl" />
          <span>Push</span>
        </NavLink>
        <div className="nav__lists">
          <div className="nav__items nav__items--left">
            <NavLink to="/" className="nav__link">
              Overview
            </NavLink>
            <NavLink to="/" className="nav__link">
              FAQs
            </NavLink>
          </div>
          <div className="nav__items nav__items--right">
            <NavLink to="/" className="nav__link">
              Sign In
            </NavLink>
            <NavLink to="/" className="btn btn--secondary">
              Join Meeting
            </NavLink>
            <NavLink to="/" className="btn btn--primary">
              Get Started
            </NavLink>
          </div>
        </div>
        <button className="nav__toggle" onClick={toggle}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
