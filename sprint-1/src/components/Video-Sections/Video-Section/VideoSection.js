import React from 'react';
import './VideoSection.scss'

function VideoSection(props) {
    return (
        <div className="VideoSection">
            <img className="VideoSection__video-image" src={props.videoImage} alt=""/>
            <div className="VideoSection__text-info">
                <h4 className="VideoSection__video-title">{props.title}</h4>
                <br/>
                <p className="VideoSection__video-author">{props.author}</p> 
            </div>
            
        </div>
    );
}

export default VideoSection;


