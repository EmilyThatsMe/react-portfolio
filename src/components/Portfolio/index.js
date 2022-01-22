import React, { useState } from 'react';
import kanye from '../../assets/images/kanye.jpg';
import dog from '../../assets/images/dog.jpg';
import profile from '../../assets/images/profile.jpg';
import run from '../../assets/images/run.jpg';
import quiz from '../../assets/images/quiz.jpg';
import notes from '../../assets/images/notes.jpg';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="flex-row">
        <div className="img--container">
          <img src={kanye} className="img-thumbnail mx-1"></img>
          <span>
            <a href="https://concord511.github.io/Quote-Battle/">
              Kanye Guess - HTML, CSS, Javascript
            </a>
            <br></br>
            <a href="https://github.com/Concord511/Quote-Battle">Github</a>
          </span>
        </div>
        <div className="img--container">
          <img src={dog} className="img-thumbnail mx-1"></img>
          <span>
            <a href="https://secret-sea-39551.herokuapp.com/">
              Rate My Dog - SQL, Sequelize
            </a>
            <br></br>
            <a href="https://github.com/cassie-s/the-dog-blog">Github</a>
          </span>
        </div>
        <div className="img--container">
          <img src={profile} className="img-thumbnail mx-1"></img>
          <span>
            <a href="https://github.com/EmilyThatsMe/profile-generator">
              Profile generator - Node, Express, Inquirer
            </a>
            <br></br>
            <a href="https://github.com/EmilyThatsMe/profile-generator">
              Github
            </a>
          </span>
        </div>
        <div className="img--container">
          <img src={quiz} className="img-thumbnail mx-1"></img>
          <span>
            <a href="https://emilythatsme.github.io/code-quiz/">
              Code Quiz - CSS, Javascript, Moment.js
            </a>
            <br></br>
            <a href="https://github.com/EmilyThatsMe/code-quiz">Github</a>
          </span>
        </div>
        <div className="img--container">
          <img src={run} className="img-thumbnail mx-1"></img>
          <span>
            <a href="https://emilythatsme.github.io/run-buddy/">
              Run Buddy - HTML, CSS
            </a>
            <br></br>
            <a href="https://github.com/EmilyThatsMe/run-buddy">Github</a>
          </span>
        </div>
        <div className="img--container">
          <img src={notes} className="img-thumbnail mx-1"></img>
          <span>
            <a href="https://emilythatsme.github.io/express-note-taker/">
              Note Taker - Node, Express
            </a>
            <br></br>
            <a href="https://github.com/EmilyThatsMe/express-note-taker">
              Github
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
