import React from 'react';

function ContactForm() {
  return (
    <form className="add-form">
      <h3>Get in touch 👋</h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </form>
  );
}

export default ContactForm;
