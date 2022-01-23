import React from 'react';

function Nav(props) {
  const { isClicked, setIsClicked } = props;
  return (
    <header className="sticky">
      <div className="container">
        <div className="header--logo">
          <a href="/">Emily Thon</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about-me" onClick={() => setIsClicked(true)}>
                About Me
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setIsClicked(true)}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#resume" onClick={() => setIsClicked(true)}>
                Resume
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsClicked(true)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
