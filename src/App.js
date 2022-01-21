import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
        <About></About>
      </main>
      <footer>Emily Thon</footer>
    </div>
  );
}

export default App;
