import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState();
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError('');
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success('Please verify your email address. ');
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        //email send for verification
      })
      .catch((error) => {
        //error
        console.log(error);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        ///
      })
      .catch(() => {
        ///
      });
  };

  const handleTermsAccepted = (event) => {
    setTermsAccepted(event.target.checked);
  };
  return (
    <Form className='w-50 m-auto' onSubmit={handleOnSubmit}>
      <Form.Group className='mb-3' controlId='formBasicName'>
        <Form.Label>Your name</Form.Label>
        <Form.Control type='text' name='name' placeholder='Your name' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicName'>
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type='text' name='photourl' placeholder='Photo URL' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          name='email'
          placeholder='Enter email'
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          name='password'
          placeholder='Password'
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check
          type='checkbox'
          onClick={handleTermsAccepted}
          label={
            <>
              Accept <Link to='/terms'>terms and conditions</Link>
            </>
          }
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Text className='text-danger'>{error}</Form.Text>
      </Form.Group>

      <Button variant='outline-primary' type='submit' disabled={!termsAccepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
