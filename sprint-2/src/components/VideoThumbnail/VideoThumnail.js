import React, { Component } from 'react';
import './VideoThumbnail.scss';
import ThumbnailImage from './assets/Upload-video-preview.jpg'

class VideoThumbnail extends Component {

    render() {
        return (
            <div className="VideoThumbnail">
                <h4 className="VideoThumbnail__title">Upload Video</h4>
                <div className="VideoThumbnail__container">
                    <p className="VideoThumbnail__description">Video Thumbnail</p>
                    <img src={ThumbnailImage} alt="" className="VideoThumbnail__thumbnail-img"/>
                </div>
                
            </div>
        )
    }
}

export default VideoThumbnail
