import React, { Component } from 'react';
import VideoSection from './Video-Section/VideoSection'
import Video1 from './Images/video-list-1.jpg';
import Video2 from './Images/video-list-2.jpg';
import Video3 from './Images/video-list-3.jpg';
import Video4 from './Images/video-list-4.jpg';
import Video5 from './Images/video-list-5.jpg';
import Video6 from './Images/video-list-6.jpg';
import Video7 from './Images/video-list-7.jpg';
import Video8 from './Images/video-list-8.jpg';
import Video9 from './Images/video-list-8.jpg';
import './VideoSections.scss';
import uuid from 'react-uuid';
import axios from 'axios';




class VideoSections extends Component {

    constructor(props){
        super(props)
        this.getId = this.getId.bind(this)
    }

    getId(id){
        this.props.transferId(id)
    }


    displayVideos(){

        let allVideos = this.props.videos.filter(video => {
            return video.title !== this.props.currentVideoName
        }).map(video => {
            return <VideoSection videoImage={video.image} title={video.title} author={video.channel} id = {video.id} key={uuid()} transferId={this.getId}/>
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