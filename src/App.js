import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Github from './assets/images/iconmonstr-github-1.svg';
import Linkedin from './assets/images/iconmonstr-linkedin-3.svg';
import Stack from './assets/images/iconmonstr-stackoverflow-1.svg';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <Nav isClicked={isClicked} setIsClicked={setIsClicked}></Nav>
      <main id="main">
        {isClicked ? <About></About> : <About></About>}
        {isClicked ? <Portfolio></Portfolio> : <Portfolio></Portfolio>}
        {isClicked ? <Resume></Resume> : <Resume></Resume>}
        {isClicked ? <ContactForm></ContactForm> : <ContactForm></ContactForm>}
      </main>
      <footer>
        <a href="https://github.com/EmilyThatsMe">
          {' '}
          <img src={Github}></img>
        </a>
        <a href="https://www.linkedin.com/in/emmykay/">
          {' '}
          <img src={Linkedin}></img>
        </a>
        <a href="#">
          {' '}
          <img src={Stack}></img>
        </a>
      </footer>
    </div>
  );
}

export default App;
