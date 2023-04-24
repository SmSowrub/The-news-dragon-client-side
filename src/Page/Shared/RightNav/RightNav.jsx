import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import './RightNav.css'

const RightNav = () => {
    return (
        <div className='rightNav'>
            <h3 className='my-4'>Login with</h3>
            <Button className='mb-2 px-5' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button className='mb-4 px-5' variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='me-2' /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='me-2' /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='me-2' /> FaInstagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='QZone text-center'>
                {/* <img src={} alt="" /> */}
                <div className='Newspaper'>
                    <h3>Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='mb-4 px-5' variant="secondary">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;