import React from 'react';
import myImage from '../../assets/images/me.jpg';

function About() {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <img src={myImage}></img>
    </section>
  );
}

export default About;
