import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor repudiandae placeat vitae quia repellat expedita perferendis sequi quasi, esse vero ea, quo soluta magni impedit quibusdam molestiae! Consequuntur, ullam illum!</p>

            <p>Go back tp <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;