import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h2>This is login</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className='my-2 px-3 py-2 w-100 form-control bgSecondary' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className=" mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <div className='btnShow'>
                        <input type="password" name='password' className='my-2 px-3 py-2 w-100 form-control bgSecondary' id="exampleInputPassword1" required />
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input bgSecondary" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <Button type="submit" className="btn btn-primary bgSecondary">Submit</Button>
            </form>
            <p className=''> Don't have an account..? <Link to='/register'>Register</Link></p>
            <p className='text-danger'></p>
            <p className='text-success'></p>

        </Container>
    );
};

export default Login;