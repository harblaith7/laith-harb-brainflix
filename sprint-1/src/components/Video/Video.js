import React, { Component } from 'react';
import './Video.scss'
import VideoPlayer from './brainflix-video.mp4';
import VolumeBtn from './Icon-volume.svg';
import PlayButton from './Icon-play.svg';
import Scrubber from './Icon-scrubber-control.svg'

class Video extends Component {
    render() {
        return (
            <div className="Video">
                <div className="Video__video-container">
                    <video className="Video__video" src={VideoPlayer}></video>
                    <div className="Video__play-btn-container">
                        <img src={PlayButton} alt="" className="Video__play-btn"/>
                    </div>
                    <div className="Video__play-progress-container">
                        <div className="Video__play-progress"></div>
                    </div>
                </div>
                
                
                
                
            </div>
        );
    }
}

export default Video;