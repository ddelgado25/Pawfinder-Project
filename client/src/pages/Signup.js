import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import welcomeDog from '../images/welcome-back.png';

function Signup(props) {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/5">
        <img
          src={welcomeDog}
          alt="jackrussel"
          className="max-w-full h-auto transform scale-200"
        />
      </div>

      <div className="w-2/5">

        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Sign Up For an Account</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block mb-2">
                  First Name:
                </label>
                <input
                  placeholder="First"
                  name="firstName"
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block mb-2">
                  Last Name:
                </label>
                <input
                  placeholder="Last"
                  name="lastName"
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email:
                </label>
                <input
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2">
                  Password:
                </label>
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
