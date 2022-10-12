import React from 'react';
import './Banner.css';
import video1 from '../../video-banner/video.mp4';
import Slide from 'react-reveal/Slide';
const Banner = () => {

    return (
         <Slide left>

       <div  className='video-banner'>
         <video className='banner-video' src={video1} muted loop autoPlay ></video>
         <div  className="text">
         <h1 className='banner-text'>Welcome To <span className='deposito'>DEPOSITO</span></h1>
         <button type="button" className="btn btn-outline-primary btn-lg mt-2">Explore</button>
         </div>
          </div> 
         </Slide>
    );
};

export default Banner;

