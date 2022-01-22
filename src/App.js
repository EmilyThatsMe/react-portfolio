import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <ContactForm></ContactForm>
        <About></About>
      </main>
      <footer>Emily Thon</footer>
    </div>
  );
}

export default App;
