import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import './Header.css';
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className="text-secondary mt-2"><small>Journalism Without Fear or Favor</small></p>
                <p className='date'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='d-flex marque'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-gray weight' speed={80}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

            
        </Container>
    );
};

export default Header;