import React, { Component } from 'react';
import './VideoInfo.scss'

class VideoInfo extends Component {
    render() {
        return (
            <div className="VideoInfo">
                <div className="VideoInfo__container">
                <div className="VideoInfo__info-container">
                    <h3 className="VideoInfo__title">
                        BMX Rampage: 2018 Highlights
                    </h3>
                    <h6 className="VideoInfo__author">
                        By Red Cow
                        <span className="VideoInfo__date">
                            12/18/2018
                        </span>
                    </h6>
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