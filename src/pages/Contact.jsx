import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Link to="/contact-form">ContactForm</Link>
    </div>
  );
}

export default Contact;
