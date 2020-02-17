import React, { Component } from 'react';
import './VideoInfo.scss';
import ViewsIcon from './Icon-views.svg';
import LikesIcon from './Icon-likes.svg'

class VideoInfo extends Component {

    componentDidMount(){
        this.props.getTitle('BMX Rampage: 2018 Highlights')
    }

    render() {
        return (
            <div className="VideoInfo">
                <div className="VideoInfo__container">
                    <div className="VideoInfo__info-container">
                        <h3 className="VideoInfo__title">
                            BMX Rampage: 2018 Highlights
                        </h3>
                        <div className="VideoInfo__author-container">
                            <h6 className="VideoInfo__author">
                                By Red Cow
                                <span className="VideoInfo__date">
                                    12/18/2018
                                </span>
                            </h6>
                            <div className="VideoInfo__stats-container">
                                <span className="VideoInfo__stats">
                                    <img src={LikesIcon} className="VideoInfo__stats-icon" alt=""/>
                                    100,232
                                </span>
                                <span className="VideoInfo__stats">
                                    <img src={ViewsIcon} className="VideoInfo__stats-icon" alt=""/>
                                    1,102,322
                                </span>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                <div className="VideoInfo__description-container">
                    <p className="VideoInfo__description">
                        On a gusty day in Southern Utah, a group of 25
                        daring mountain bikers blew the doors off what is
                        possible on two wheels, unleashing some of the
                        biggest moments the sport has ever seen. While
                        mother nature only allowed for one full run before
                        the conditions made it impossible to ride, that was
                        all that was needed for event veteran Kyle Strait,
                        who won the event for the second time -- eight years
                        after his first Red Cow Rampage title
                    </p>
                </div>
                </div>
            </div>
        );
    }
}

export default VideoInfo;