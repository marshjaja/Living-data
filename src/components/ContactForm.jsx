import React, { useState } from 'react';

function ContactForm() {

    // create state variable that holds the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    // create state varibale for form errors
   const [formErrors, setFormErrors] = useState({});
   const [submitting, setSubmitting] = useState(false);

//  Update for data as user types
   const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
        ...formData,[name]: value
    });
    setFormErrors({
        ...formErrors,[name]:''
    })
   }


//    Validation form to check that all inout fields have been completed by user
   const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()){
        errors.name = 'Name is required';
    }
   }

  return (
    
  );
}

export default ContactForm;
