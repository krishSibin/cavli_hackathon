import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Signup.css"
const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform API call to submit data to the backend
    try {
      const response = await fetch('your_backend_api_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., redirect to a success page
        console.log('Signup successful!');
        
      } else {
        // Handle error, e.g., show an error message
        console.error('Signup failed.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="signup">
    <div className="signContainer mt-5">
      <h2 className="signhead text-center">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder='example.gmail.com'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="tel"
            name="phoneNumber"
            placeholder='Mobile'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder='Password'
            value={formData.password}
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

        <Button variant="primary" type="submit" className="signupbut">
          Sign Up
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default SignupPage;
