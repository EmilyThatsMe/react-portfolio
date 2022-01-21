import React from 'react';

function Nav() {
  return (
    <header>
      <div className="container">
        <div className="header--logo">
          <a href="/">Emily Thon</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
