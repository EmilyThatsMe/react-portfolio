import React from 'react';

function ContactForm() {
  // JSX
  return (
    <section class="contact" id="contact">
      <div class="container container--contact">
        <h2>Contact</h2>
        <form action="input">
          <div class="form-item">
            <label for="name">Name: </label>
            <input type="name" />
          </div>
          <div class="form-item">
            <label for="email">Email: </label>
            <input type="email" />
          </div>
          <div class="form-item">
            <label for="message">Message: </label>
            <textarea name="message" rows="5" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
