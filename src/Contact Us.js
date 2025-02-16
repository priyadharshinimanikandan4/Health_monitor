import React from 'react';

function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
      <h3>We'd love to hear from you!</h3>
      <p>If you have any questions, feel free to reach out to us!</p>
      <form>
        <input type="text" placeholder=" Name" />
        <br />
        <input type="email" placeholder="Your Email" />
        <br />
        <textarea placeholder="Your Message" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
