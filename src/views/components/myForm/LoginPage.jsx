import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulated API call to authenticate user
    try {
      // Replace the API endpoint with your actual login API
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful, navigate to the welcome page
        history.push('/welcome');
      } else {
        // Login failed, handle the error
        console.log('Login failed');
      }
    } catch (error) {
      // Handle any network or server errors
      console.log('Error:', error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Simulated API call to register user
    try {
      // Replace the API endpoint with your actual registration API
      const response = await fetch('https://example.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Registration successful, navigate to the welcome page
        history.push('/welcome');
      } else {
        // Registration failed, handle the error
        console.log('Registration failed');
      }
    } catch (error) {
      // Handle any network or server errors
      console.log('Error:', error.message);
    }
  };

  return (
    <section>
      <div className="login-box">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          {/* Rest of the form code */}
        </form>
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          {/* Rest of the form code */}
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
