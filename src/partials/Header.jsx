import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-30 bg-background-image bg-cover bg-center">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex items-center">
            <NavLink
              to="/"
              className={`${
                pathname === "/" ? "text-blue-700" : null
              } ml-4 text-slate-500 hover:text-slate-600`}
            >
              <div>Home</div>
            </NavLink>
            <div className="hidden md:flex">
              <NavLink
                to="/memoir"
                className={`${
                  pathname === "/memoir" || pathname === "/memoir/"
                    ? "text-blue-700"
                    : null
                } ml-4 text-slate-500 hover:text-slate-600`}
              >
                <div>Memoir</div>
              </NavLink>
              <NavLink
                to="/podcasts"
                className={`${
                  pathname === "/podcasts" ? "text-blue-700" : null
                } ml-4 text-slate-500 hover:text-slate-600`}
              >
                <div>Podcasts</div>
              </NavLink>
              <NavLink
                to="/speaking"
                className={`${
                  pathname === "/speaking" || pathname === "/speaking/"
                    ? "text-blue-700"
                    : null
                } ml-4 text-slate-500 hover:text-slate-600`}
              >
                <div>Speaking</div>
              </NavLink>
              <NavLink
                to="/resources"
                className={`${
                  pathname === "/resources" || pathname === "/resources/"
                    ? "text-blue-700"
                    : null
                } ml-4 text-slate-500 hover:text-slate-600`}
              >
                <div>Resources</div>
              </NavLink>
              <NavLink
                to="/videos"
                className={`${
                  pathname === "/videos" || pathname === "/videos/"
                    ? "text-blue-700"
                    : null
                } ml-4 text-slate-500 hover:text-slate-600`}
              >
                <div>Videos</div>
              </NavLink>
              <NavLink
                to="/news"
                className={`${
                  pathname === "/news" || pathname === "/news/"
                    ? "text-blue-700"
                    : null
                } ml-4 text-slate-500 hover:text-slate-600`}
              >
                <div>News</div>
              </NavLink>
              <NavLink
                to="/development"
                className={`${
                  pathname === "/development" || pathname === "/development/"
                    ? "text-blue-700"
                    : null
                } ml-4 text-slate-500 hover:text-slate-600`}
              >
                <div>Apps</div>
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-500 hover:text-slate-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <NavLink
            to="/memoir"
            className={`block px-4 py-2 ${
              pathname === "/memoir" || pathname === "/memoir/"
                ? "text-blue-700"
                : null
            } text-slate-500 hover:text-slate-600`}
          >
            Memoir
          </NavLink>
          <NavLink
            to="/podcasts"
            className={`block px-4 py-2 ${
              pathname === "/podcasts" ? "text-blue-700" : null
            } text-slate-500 hover:text-slate-600`}
          >
            Podcasts
          </NavLink>
          <NavLink
            to="/speaking"
            className={`block px-4 py-2 ${
              pathname === "/speaking" || pathname === "/speaking/"
                ? "text-blue-700"
                : null
            } text-slate-500 hover:text-slate-600`}
          >
            Speaking
          </NavLink>
          <NavLink
            to="/resources"
            className={`block px-4 py-2 ${
              pathname === "/resources" || pathname === "/resources/"
                ? "text-blue-700"
                : null
            } text-slate-500 hover:text-slate-600`}
          >
            Resources
          </NavLink>
          <NavLink
            to="/videos"
            className={`block px-4 py-2 ${
              pathname === "/videos" || pathname === "/videos/"
                ? "text-blue-700"
                : null
            } text-slate-500 hover:text-slate-600`}
          >
            Videos
          </NavLink>
          <NavLink
            to="/news"
            className={`block px-4 py-2 ${
              pathname === "/news" || pathname === "/news/"
                ? "text-blue-700"
                : null
            } text-slate-500 hover:text-slate-600`}
          >
            News
          </NavLink>
          <NavLink
            to="/development"
            className={`block px-4 py-2 ${
              pathname === "/development" || pathname === "/development/"
                ? "text-blue-700"
                : null
            } text-slate-500 hover:text-slate-600`}
          >
            Apps
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
