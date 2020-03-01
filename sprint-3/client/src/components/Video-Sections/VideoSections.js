import React, { Component } from 'react';
import VideoSection from '../VideoSection/VideoSection'
import './VideoSections.scss';
import uuid from 'react-uuid';


class VideoSections extends Component {

    constructor(props){
        super(props)
    }
    
    
    displayVideos(){
        return this.props.videos.map(video => {
            return <VideoSection videoImage={video.image} title={video.title} author={video.channel} id = {video.id} key={uuid()} />
        }) 
    }

    render() {
        return (
            <div className="VideoSections">
                <h5 className="VideoSections__title">Next Videos</h5>
                <div className="VideoSections__containers">
                    {this.displayVideos()}
                </div>
            </div>
        );
    }
}

export default VideoSections;

