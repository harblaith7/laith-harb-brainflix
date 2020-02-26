import React, { Component } from 'react';
import './VideoInfo.scss';
import ViewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg'

class VideoInfo extends Component {

    constructor(props){
        super(props)
        
    }

    dymanicDate(date){
        let timeInSeconds = (Date.now() - date)/1000;

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
                                    {this.dymanicDate(timestamp)}
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