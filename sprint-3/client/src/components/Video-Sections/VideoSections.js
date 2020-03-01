import React, { Component } from 'react';
import VideoSection from './Video-Section/VideoSection'
import './VideoSections.scss';
import uuid from 'react-uuid';




class VideoSections extends Component {

    constructor(props){
        super(props)
      
    }

    
    displayVideos(){

        let allVideos = this.props.videos.filter(video => {
            return video.title !== this.props.currentVideoName
        }).map(video => {
            return <VideoSection videoImage={video.image} title={video.title} author={video.channel} id = {video.id} key={uuid()} />
        })

        return allVideos
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

/*



*/