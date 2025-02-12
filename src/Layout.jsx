import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <div className="layout-container">
      <header className="header">
        <h1>Nathan Kelley</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* The matched child route will render here */}
        <Outlet />
      </main>

      <footer className="footer">
        <ul>
          <li>
            <a
              href="https://github.com/nate236"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nathan-kelley-2579b7195/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Layout;