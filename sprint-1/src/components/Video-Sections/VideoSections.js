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
import './VideoSections.scss'


class VideoSections extends Component {

    constructor(props){
        super(props)
        this.state = {
            videos : [
                {videoImage : Video1, title: "Become A Travel Pro In One Easy Lesson", author: "Todd Welch"},
                {videoImage : Video2, title: "Les Houches The Hidden Gem Of The Chamonix", author: "Cornelia Blair"},
                {videoImage : Video3, title: "Travel Health Useful Medical Information For", author: "Glen Harper"},
                {videoImage : Video4, title: "Cheap Airline Tickets Great Ways To Save", author: "Todd Welch"},
                {videoImage : Video5, title: "Take A Romantic Break In A Boutique Hote", author: "Ethan Owen"},
                {videoImage : Video6, title: "Choose The Perfect Accommodations", author: "Lydia Perez"},
                {videoImage : Video7, title: "Cruising Destination Ideas", author: "Timothy Austin"},
                {videoImage : Video8, title: "Train Travel On Track For Safety", author: "Scotty Cranmer"}
            ]
        }
    }

    displayVideos(){
        let allVideos = this.state.videos.map(video => {
            return <VideoSection videoImage={video.videoImage} title={video.title} author={video.author}/>
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