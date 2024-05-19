import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header({}) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className="sticky top-0 z-30 bg-background-image bg-cover bg-center">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex items-center">
            <NavLink
              to="/"
              className={`${
                pathname === "/" ? "text-blue-700" : null
              }  ml-4 text-slate-500 hover:text-slate-600`}
            >
              <div>Home</div>
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
              to="/memoir"
              className={`${
                pathname === "/memoir" || pathname === "/memoir/"
                  ? "text-blue-700"
                  : null
              }  ml-4 text-slate-500 hover:text-slate-600`}
            >
              <div>Memoir</div>
            </NavLink>

            <NavLink
              to="/speaking"
              className={`${
                pathname === "/speaking" || pathname === "/speaking/"
                  ? "text-blue-700"
                  : null
              }  ml-4 text-slate-500 hover:text-slate-600`}
            >
              <div>Speaking</div>
            </NavLink>

            <NavLink
              to="/resources"
              className={`${
                pathname === "/resources" || pathname === "/speaking/"
                  ? "text-blue-700"
                  : null
              }  ml-4 text-slate-500 hover:text-slate-600`}
            >
              <div>Resources</div>
            </NavLink>

            <NavLink
              to="/videos"
              className={`${
                pathname === "/videos" || pathname === "/videos/"
                  ? "text-blue-700"
                  : null
              }  ml-4 text-slate-500 hover:text-slate-600`}
            >
              <div>Videos</div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
