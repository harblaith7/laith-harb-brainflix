import React, { Component } from 'react';
import './Video.scss'
import VolumeBtn from '../../assets/Icons/SVG/Icon-volume.svg';
import PlayButton from '../../assets/Icons/SVG/Icon-play.svg';
import Scrubber from '../../assets/Icons/SVG/Icon-scrubber-control.svg'
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