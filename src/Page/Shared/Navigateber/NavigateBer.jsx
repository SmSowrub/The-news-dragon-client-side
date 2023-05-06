import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCircle, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavigateBer = () => {
    const {user}=useContext(AuthContext)
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='mb-4'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ps-5 ">
                            <Link style={{ textDecoration: 'none', marginRight:'20px', color: 'gray', fontSize: '24px' }} to='/category/0'>Home</Link>
                            <Link style={{ textDecoration: 'none', marginRight:'20px', color: 'gray', fontSize: '24px' }} href="#pricing">About</Link>
                            <Link style={{ textDecoration: 'none', marginRight:'20px', color: 'gray', fontSize: '24px' }} href="#pricing">Career</Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle className='fs-1 me-3' title={`${user.DisplayName}`}></FaUserCircle>}

                            {
                            user ? <Button className='me-3' variant="secondary">Logout</Button>:
                                <Link to='/login'><Button className='me-3' variant="secondary">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigateBer;