import React, { Component } from 'react';
import './Video.scss'
import VideoPlayer from './brainflix-video.mp4';
import VolumeBtn from './Icon-volume.svg';
import PlayButton from './Icon-play.svg';
import Scrubber from './Icon-scrubber-control.svg'
import VideoImage from './video-list-0.jpg'



class Video extends Component {
    render() {
        return (
            <div className="Video">
                <div className="Video__video-container">

                    
                    <video className="Video__video" poster={this.props.videoImage} src={this.props.videoImage} />
                    
                </div>
                 
            </div>
        );
    }
}

export default Video;