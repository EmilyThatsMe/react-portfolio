import React from 'react';

function Resume() {
  return (
    <section className="resume--container" id="resume">
      <h1>Resume</h1>
      <div className="skill--list">
        <h2>I am experienced in the following technologies:</h2>
        <ul>
          <li>HTML and CSS</li>
          <li>Javascript and JQuery</li>
          <li>Node</li>
          <li>Express</li>
          <li>React</li>
          <li>SQL and Sequelize</li>
          <li>MongoDB and Mongoose</li>
        </ul>
      </div>
      <p>
        To check out my full resume, check out my linkedIn page{' '}
        <a href="https://www.linkedin.com/in/emmykay/">here</a>
      </p>
    </section>
  );
}

export default Resume;
