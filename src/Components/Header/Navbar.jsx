import React from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="mr-4 text-[18px] font-semibold">
        Home
      </NavLink>
      <NavLink to="/app" className="mr-4 text-[18px] font-semibold">
        App
      </NavLink>
      <NavLink to="/installation" className="mr-4 text-[18px] font-semibold">
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/"
         className="btn btn-ghost text-xl text-[#804ee8] font-bold">
          <img src={logo} alt="" className="w-[50px] h-[50px]" />
          HERO.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/" target="/blank"
         className="btn bg-linear-to-r from-violet-700 to-violet-400 text-[20px] font-semibold text-white">
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
