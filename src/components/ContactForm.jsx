import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

// Contact Form Logic
function ContactForm() {
  // create state variable that holds the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // create state varibale for form errors
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  //  Update for data as user types
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  //    Validation form to check that all input fields have been completed by user
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSubmitting(true);
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Creating EmailJ serviceID, templateID and Public Key
      const serviceId = 'service_gj1vtaf';
      const templateId = 'contact_form';
      const publicKey = '8git3JVuOnc7ohSsY';

      // Creating a new object that conatins dynamic template params
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
        message: message,
      };

      // setSubmitting will clear the form once form is validated and submitted by setting submitting state to false
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="nameForm">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span className="error"> {formErrors.name}</span>}
        </div>
        <div className="emailForm">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
          <div className="subjectForm">
            <label>Subject: </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {formErrors.subject && (
              <span className="error">{formErrors.subject}</span>
            )}
          </div>
          <div className="messageForm">
            <label>Message: </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {formErrors.message && (
              <span className=" error">{formErrors.message}</span>
            )}
          </div>
        </div>
        <button className="contactButton" type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
