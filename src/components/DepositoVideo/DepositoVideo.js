import React from 'react';
import video2 from '../../video-depostio/DEPOSITO.mp4'
import './DepositoVideo.css'

const DepositoVideo = () => {
    return (
        <div className='deposito-details-video container '>
            <div  className='video-details w-full  h-44'>
         <video className='banner-details w-full h-44' src={video2} muted loop autoPlay ></video>
          </div>
        </div>
    );
};

export default DepositoVideo;