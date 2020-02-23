import React, { Component } from 'react';
import './Video.scss'
import VolumeBtn from '../../assets/Icons/SVG/Icon-volume.svg';
import PlayBtn from '../../assets/Icons/SVG/Icon-play.svg';
import Pause from '../../assets/Icons/SVG/Icon-pause.svg';
import FullScreen from '../../assets/Icons/SVG/Icon-fullscreen.svg'


class Video extends Component {
    render() {
        return (
            <div className="Video">
                <div className="Video__video-container">
                    <img className="Video__video" poster={this.props.videoImage} src={this.props.videoImage}/>
                    <div className="Video__icon-container">
                        <img src={PlayBtn} alt="" className="Video__icon"/>
                    </div>
                    <div className="Video__icon-container Video__icon-container--scrubber">
                        <div className="Video__icon Video__icon--scrubber"></div>
                    </div>
                    <div className="Video__icon-container Video__icon-container--two">
                         <img src={FullScreen} alt="" className="Video__icon"/>
                        <img src={VolumeBtn} alt="" className="Video__icon"/>
                    </div>
                </div>
                 
            </div>
        );
    }
}

export default Video;


/* 

                    <div className="Video__icon-container">
                        <img src={PlayBtn} alt="" className="Video__icon"/>
                    </div>
                    <div className="Video__icon-container Video__icon-container--scrubber">
                        <div className="Video__icon Video__icon--scrubber"></div>
                    </div>
                    <div className="Video__icon-container Video__icon-container--two">
                         <img src={FullScreen} alt="" className="Video__icon"/>
                        <img src={VolumeBtn} alt="" className="Video__icon"/>
                    </div>

                    */