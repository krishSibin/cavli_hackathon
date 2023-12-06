import "./Signup.css";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate API call for authentication
    const isValidUser = true; // Replace with actual authentication logic

    if (isValidUser) {
      // Generate a token (assuming it's a JWT)
      const expirationDate = new Date();
      expirationDate.setMonth(expirationDate.getMonth() + 1);

      const token = 'your_generated_token'; // Replace with actual token generation logic

      // Store email and token in local storage
      localStorage.setItem('userEmail', loginData.email);
      localStorage.setItem('userToken', token);

      // Print email to the console
      console.log('Logged in as:', loginData.email);
    } else {
      console.error('Invalid credentials');
    }
  };

  return (
    <div className="login">
    <div className="signContainer mt-5">
      <h2 className="signhead text-center">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formShowPassword">
          <Form.Check
            type="checkbox"
            label="Show Password"
            onChange={handleShowPassword}
          />
        </Form.Group>
        <Link to="/uploader"><Button variant="primary" type="submit" className="signupbut">
          Log In
        </Button></Link>
      </Form>
    </div>
    </div>
  );
};

export default LoginPage;
