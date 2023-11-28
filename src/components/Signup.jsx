// Signup.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';

// Import the profile image from your assets folder
import profileImage from '../assets/image1.jpg';

const SignupForm = styled.form`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #f4f7f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Error = styled.div`
  color: red;
  font-size: 0.8em;
`;

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      city: '',
      phone: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      phone: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('first_name', values.firstName);
      formData.append('last_name', values.lastName);
      formData.append('city', values.city);
      formData.append('phone', values.phone);
      formData.append('email', values.email);

      // Add the static image to the form data
      // const staticImage = new File([profileImage], 'static_image.jpg', { type: 'image/jpeg' });
      // formData.append('profile_image', staticImage);

      try {
        const response = await axios.post('http://110.227.208.185/api/practical_2/register', formData);

        console.log(response.data);

        // Handle successful registration, e.g., redirect or show a success message
      } catch (error) {
        console.error('Registration error:', error.message);
        // Handle registration error, e.g., show an error message to the user
      }
    },
  });

  return (
    <SignupForm onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label>First Name:</Label>
        <Input
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <Error>{formik.touched.firstName && formik.errors.firstName}</Error>
      </FormGroup>
      <FormGroup>
        <Label>Last Name:</Label>
        <Input
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        <Error>{formik.touched.lastName && formik.errors.lastName}</Error>
      </FormGroup>
      <FormGroup>
        <Label>City:</Label>
        <Input type="text" name="city" value={formik.values.city} onChange={formik.handleChange} />
        <Error>{formik.touched.city && formik.errors.city}</Error>
      </FormGroup>
      <FormGroup>
        <Label>Phone:</Label>
        <Input type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} />
        <Error>{formik.touched.phone && formik.errors.phone}</Error>
      </FormGroup>
      <FormGroup>
        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Error>{formik.touched.email && formik.errors.email}</Error>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </SignupForm>
  );
};

export default Signup;
