import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import helloDog from '../images/hello.png';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
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
    <div className="flex justify-center items-center h-screen">
      <div className="login-container border rounded-lg shadow-lg max-w-75">
        <div className="form-container p-4">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-2">
                Email address:
              </label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                className="input-field py-2 px-4 border rounded"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="pwd" className="mb-2">
                Password:
              </label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                className="input-field py-2 px-4 border rounded"
                onChange={handleChange}
              />
            </div>
            {error && (
              <div>
                <p className="error-text">The provided credentials are incorrect</p>
              </div>
            )}
            <div className="flex justify-end">
              <button type="submit" className="submit-button py-2 px-4 bg-blue-500 text-white rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <img src={helloDog} alt="pitbull" />
      </div>
    </div>
  );
}

export default Login;
