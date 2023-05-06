import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h2>This is Register</h2>
            <Form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Your Name</label>
                    <input className='my-2 px-3 py-2 w-100 form-control bgSecondary' type='text' placeholder='Write Your Name' name='name' required></input>

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Your PhotoUrl</label>
                    <input className='my-2 px-3 py-2 w-100 form-control bgSecondary' type='photo' placeholder='Your PhotoUrl' name='photo' required></input>

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input className='my-2 px-3 py-2 w-100 form-control bgSecondary' type='email' placeholder='Your Email' name='email' required></input>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input className='my-2 px-3 py-2 w-100 form-control bgSecondary' type='password' placeholder='Write a Password' name='password' required></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input bgSecondary" id="exampleCheck1" />
                    <label className="form-check-label " for="exampleCheck1">Check me out</label>
                </div>
                <Button type="submit" className="btn btn-primary bgSecondary">Submit</Button>

            </Form>
            <p><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
            <p className='text-success'></p>
            <p className='text-danger'></p>
        </Container>
    );
};

export default Register;