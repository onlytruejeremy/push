import React from "react";
import { FiVideo, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import useToggle from "../../hooks/useToggle";
import Link from "../Link/Link";
import "./NavBar.css";
const NavBar = () => {
  const { open, toggle } = useToggle();
  return (
    <header className="nav-wrapper whitespace-nowrap">
      <nav className="nav">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mr-8 text-xl"
        >
          <FiVideo className="text-2xl" />
          <span>Push</span>
        </Link>
        <div className={`nav-menu ${open && "active"}`}>
          <div className="flex flex-col w-full gap-4 md:flex-row">
            <Link href="#" className="nav-link">
              Overview
            </Link>
            <Link href="#" className="nav-link">
              FAQs
            </Link>
          </div>
          <div className="flex flex-col w-full gap-4 md:items-center md:flex-row md:justify-end">
            <Link href="/login" className="nav-link">
              Sign In
            </Link>
            <Link href="/join" className="btn btn-primary">
              <span>Join Meeting</span>
            </Link>
            <Link href="/register" className="btn btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
        <button
          onClick={toggle}
          className="ml-auto text-2xl hover:text-gray-200 md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
