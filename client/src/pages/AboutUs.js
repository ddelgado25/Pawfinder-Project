import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../utils/mutations';
import upsidedownDog from '../images/upsidedowndogo.jpeg';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

// Add custom transition classes
const transitionClasses = 'transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110';

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
   <div
      style={{
        backgroundImage: `url(${upsidedownDog})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="min-h-screen flex items-center"
    >
      <div className="container mx-auto my-1 max-w-screen-lg flex justify-center pl-10">
        <div className="w-30% bg-transparent">

          <div className="w-2/3 bg-white bg-opacity-75 rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="mb-6">We are a passionate company dedicated to bringing the joy of dogs to families all over the world. Our goal is to connect you with your new best friend.</p>
          </div>

          <div className="flex items-center pl-10">
            <div className="w-40 h-auto mr-4"></div>
            <div className="w-100% bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <form onSubmit={handleFormSubmit} className="mb-6">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 my-2">
          <label htmlFor="name" className="text-lg md:w-1/4">Name:</label>
          <input
            placeholder="Your Name"
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
            className={`border rounded-md p-2 flex-grow ${transitionClasses}`}
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 my-2">
          <label htmlFor="email" className="text-lg md:w-1/4">Email :</label>
          <input
            placeholder="youremail@here.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            className={`border rounded-md p-2 flex-grow ${transitionClasses}`}
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 my-2">
          <label htmlFor="message" className="text-lg md:w-1/4">Message:</label>
          <textarea
            placeholder="Your Message"
            name="message"
            id="message"
            onChange={handleChange}
            className={`border rounded-md p-2 flex-grow ${transitionClasses}`}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">An error occurred. Please try again.</p>
          </div>
        ) : null}
        <div className="flex flex-row-reverse">
          <button type="submit" className={`px-4 py-2 bg-blue-500 text-white rounded-md ${transitionClasses}`}>Submit</button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>

  );
  
}

export default AboutUs;
