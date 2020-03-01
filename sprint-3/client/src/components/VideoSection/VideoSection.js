import React, { Component } from 'react'
import './VideoSection.scss';
import {Link} from 'react-router-dom';


export default class VideoSection extends Component {

    constructor(props){
        super(props)
        this.videoSectionRef = React.createRef()
    }

  
    render() {
        return (
            <Link to={`/video/${this.props.id}`} className="VideoSection__link">
                <div  className="VideoSection" ref={this.videoSectionRef}  id={this.props.id}>
                    <img className="VideoSection__video-image" src={this.props.videoImage} alt="" />
                    <div className="VideoSection__text-info">
                        <h4 className="VideoSection__video-title">{this.props.title}</h4>
                        <br/>
                        <p className="VideoSection__video-author">{this.props.author}</p> 
                    </div> 
                </div>
            </Link>
        )
    }
}


