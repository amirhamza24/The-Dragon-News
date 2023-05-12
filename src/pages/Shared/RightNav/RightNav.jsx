import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <h4 >Login with</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>{' '}
            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>

            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <QZone></QZone>

            <div className='bg'>
                {/* <img src={bg} alt="" /> */}

                <div className='text-center px-3 bg-absolute'>
                    <div className='mx-3 text-white bg-title'>
                        <h3 className=''>Create an Amazing Newspaper</h3>
                        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <Button variant='danger'>Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;