import React, { Component } from 'react';
import './Comment.scss'

class Comment extends Component {
    render() {
        return (
            <div className="Comment">
                <div className="Comment__comment-container">
                    <div className="Comment__comment-user-image"></div>
                        <div className="Comment__comment">
                            <div className="Comment__name-container">
                                <h4 className="Comment__name">{this.props.name}</h4>
                                <span className="Comment__date">{this.props.date}</span>
                            </div>
                            <p className="Comment__comment-text">
                                {this.props.comment}
                            </p>
                        </div>
                </div>
                
            </div>
        );
    }
}

export default Comment;