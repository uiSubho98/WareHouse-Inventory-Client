import React from 'react';
import './NotFound.css'
import image from './image/404.png'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='notFound-container'>
            <div className="image text-center ">
                <img src={image} alt="" />
            </div>
            <div className="text-not text-center">
                    <h4>Soory,it looks like someone took a bite of this page</h4>
                    <p>Much as we would love to serve it up to you,we'd suggest you <Link className='link-404' to='/home'>GO BACK</Link> and try a different link. </p>
            </div>
        </div>
    );
};

export default NotFound;