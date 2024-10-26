import React, { useState } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi2'; 
import { HoverBorderGradient } from '../componentes/ui/AceternityUI/hover-border-gradient'; 
import { BackgroundBeams } from '../componentes/ui/AceternityUI/background-beams';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa'; 
import './CSSFiles/Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you could add logic to send the form data to an API.
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="left-container">
        <h1 className='text-4xl mb-5 mt-5'>Feel free to send me an email</h1>
        <p className='mb-3'>I would love to hear from you!</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='John Doe'
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='JohnDoe@gmail.com'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            type="submit"
            className="dark:bg-black text-black dark:text-white flex items-center space-x-2 p-2"
          >
            <span className='text-white'>Send Message</span>
          </HoverBorderGradient>
        </form>
      </div>
      <div className="right-container">
        <h1 className="contact-header">
          Contact Information
          <HiOutlineSparkles className="sparkle-icon size-xl" />
        </h1>
        <p>If you have any questions or would like to reach out, feel free to contact me!</p>
        <div className="icon-bubble">
          <FaEnvelope className="icon" />
          <span>nilskristofferleal@gmail.com</span>
        </div>
        <div className="icon-bubble">
          <FaPhoneAlt className="icon" />
          <span>(+46) 735 418 637.</span>
        </div>
        <div className="icon-bubble">
          <FaLinkedin className="icon" />
          <a href="https://www.linkedin.com/in/kristoffer-leal/" target="_blank" rel="noopener noreferrer">
            Kristoffer Leal
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Contact;
