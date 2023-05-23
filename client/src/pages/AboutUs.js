import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { SEND_MESSAGE } from '../utils/mutations';

function AboutUs(props) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sendMessage, { error }] = useMutation(SEND_MESSAGE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await sendMessage({
        variables: { name: formState.name, email: formState.email, message: formState.message },
      });
      console.log(mutationResponse);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/">← Go to Home</Link>

      <h2>About Us</h2>
      <p>We are a passionate company dedicated to bringing the joy of dogs to families all over the world. Our goal is to connect you with your new best friend.</p>

      <h2>Contact Us</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Your Name:</label>
          <input
            placeholder="Your Name"
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@here.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="message">Message:</label>
          <textarea
            placeholder="Your Message"
            name="message"
            id="message"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">An error occurred. Please try again.</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AboutUs;
