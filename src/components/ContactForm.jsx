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


//    Validation form to check that all input fields have been completed by user
   const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()){
        errors.name = 'Name is required';
    }
    if (!formData.email.trim()){
        errors.email = 'Email is required'
       
    } else if (!/\S+@\S+\.\S+/.test(formData.email)){
        errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()){
        errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()){
        errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
   }

   const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()){
        setSubmitting(true);
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',

        })
        setSubmitting(false);
    }
   }

  return (
    
  );
}

export default ContactForm;
