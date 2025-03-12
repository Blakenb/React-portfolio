// src/pages/Contact.jsx
import React from 'react';
import ContactForm from '../components/ContactForm'; // Ensure this path is correct

const Contact = () => (
  <section className="section">
    <h1>Contact Me</h1>
    <p>You can reach me at my email: blake@example.com</p>
    <ContactForm />
  </section>
);

export default Contact;