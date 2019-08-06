import React from 'react';
import { Player } from 'video-react';
import './VideoEmbed.css';
import logo from '../bakdrop.jpg';

const VideoEmbed = () => {

    return (
        <div className='videoembed_wrapper'>
            <br/>
            <div className="card bg-dark text-white">
                <img className="card-img myCss" src={logo}  alt="Card"/>
                    <div className="card-img-overlay">
                        <h3 className="card-title">_ _ _ _ wOrK oUt _ _ _ _ _ bUddiEs _ _ _ </h3>
                        <p className="card-text">Activate your fans, don't just collect them like baseball cards.</p>
                    </div>
                </div>
                <br/>
            <Player playsInline src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
        </div>
    );

}

export default VideoEmbed;