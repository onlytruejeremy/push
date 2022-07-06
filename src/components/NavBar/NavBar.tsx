import React, { FC } from "react";
import Link from "../Link/Link";
import { FiVideo, FiMenu, FiX } from "react-icons/fi";
import useToggle from "../../hooks/useToggle";
const NavBar = () => {
  const { open, toggle } = useToggle();
  return (
    <div className="w-100">
      <nav className="h-12 gap-8 relative flex flex-row items-center justify-between text-gray-600 font-semibold px-4 max-w-7xl mx-auto xl:px-0">
        <div className="">
          <Link
            href="/"
            className="inline-flex items-center gap-1 font-bold text-xl"
          >
            <FiVideo />
            <span>Meeters</span>
          </Link>
        </div>
        <div className={`menu ${open && "menu-active"}`}>
          <Link href="/">Overview</Link>
          <Link href="/">How It Works</Link>
          <Link href="/">Plans &amp; Pricing</Link>
        </div>
        <div className="nav-right inline-flex gap-4 basis-full justify-end">
          <Link href="/">Sign In</Link>
          <Link href="/">Join Meeting</Link>
          <Link href="/">Get Started</Link>
        </div>
        <button
          className="hover:text-gray-900 text-xl"
          onClick={toggle}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
