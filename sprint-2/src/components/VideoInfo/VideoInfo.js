import React, { Component } from 'react';
import './VideoInfo.scss';
import ViewsIcon from './Icon-views.svg';
import LikesIcon from './Icon-likes.svg'

class VideoInfo extends Component {

    constructor(props){
        super(props)
        this.state = {
            comments : [
                {
                    name: "Micheal Lyons",
                    date: this.dymanicDate('12/18/2018'),
                    comment: "They BLEW the ROOF off at their last show, once everyone startedfiguring out they were going. This isstill simply the greatest opening of aconcert I have EVER witnessed."
                },
                {
                    name: "Gary Wong",
                    date: this.dymanicDate("12/18/2018"),
                    comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
                },
                {
                    name: "Theodore Duncan",
                    date: this.dymanicDate("11/15/2018"),
                    comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
                }
            ]
        }

    }

    dymanicDate(date){
        let timeInSeconds = (Date.now() - new Date('12/18/2018').getTime())/1000;

        if(timeInSeconds < 60) {
            return 'Just now'
        } else if (timeInSeconds >= 60 && timeInSeconds < 3600){
            return `${Math.round(timeInSeconds/60)} minutes ago`
        } else if (timeInSeconds >= 3600 && timeInSeconds < 86400){
            return `${Math.round(timeInSeconds/3600)} hour${Math.round(timeInSeconds/3600) > 1 ? "s" : ""} ago`
        } else if (timeInSeconds >= 86400 && timeInSeconds < 604800){
            return `${Math.round(timeInSeconds/86400)} days ago`
        } else if (timeInSeconds >= 604800 && timeInSeconds < 2628000){
            return `${Math.round(timeInSeconds/604800)} weeks ago`
        } else if (timeInSeconds >= 26280000 && timeInSeconds < 31540000){
            return `${Math.round(timeInSeconds/26280000)} months ago`
        } else {
            return `${Math.round(timeInSeconds/31540000)} year${Math.round(timeInSeconds/3600) < 1 ? "s" : ""} ago`
        }
    }

    
    render() {
        const { title, channel, views, likes, description, timestamp} = this.props.currentVideo;
        return (
            <div className="VideoInfo">
                <div className="VideoInfo__container">
                    <div className="VideoInfo__info-container">
                        <h3 className="VideoInfo__title">
                            {title}
                        </h3>
                        <div className="VideoInfo__author-container">
                            <h6 className="VideoInfo__author">
                                {channel}
                                <span className="VideoInfo__date">
                                    {timestamp}
                                </span>
                            </h6>
                            <div className="VideoInfo__stats-container">
                                <span className="VideoInfo__stats">
                                    <img src={LikesIcon} className="VideoInfo__stats-icon" alt=""/>
                                    {likes}
                                </span>
                                <span className="VideoInfo__stats">
                                    <img src={ViewsIcon} className="VideoInfo__stats-icon" alt=""/>
                                    {views}
                                </span>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                <div className="VideoInfo__description-container">
                    <p className="VideoInfo__description">
                        {description}
                    </p>
                </div>
                </div>
            </div>
        );
    }
}

export default VideoInfo;