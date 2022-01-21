import React from 'react';

function Nav() {
  return (
    <header>
      <h2>
        <a data-testid="link" href="/">
          Emily Thon
        </a>
      </h2>
      <nav>
        <ul>
          <li>
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
