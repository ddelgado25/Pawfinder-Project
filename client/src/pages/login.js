import React, { useState } from 'react';

function Login(props){
    return (
        <div className="container my-1">
          {/* <Link to="/signup">← Go to Signup</Link> */}
    
          <h2>Login</h2>
          <form >
            <div className="flex-row space-between my-2">
              <label htmlFor="email">Email address:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                
              />
            </div>
            {/* {error ? (
              <div>
                <p className="error-text">The provided credentials are incorrect</p>
              </div>
            ) : null} */}
            <div className="flex-row flex-end">
              <button type="submit">Submit</button>
            </div>
          </form>
          <h1 className = "text-1xl font-bold underline">
              Lets GO HEAT!!
          </h1>
        </div>
    
    
    
      );
}

export default Login;