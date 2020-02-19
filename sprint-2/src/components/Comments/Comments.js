import React, { Component } from 'react';
import './Comments.scss';
import Comment from './Comment/Comment'
import UserImage from './Mohan-muruge.jpg';
import uuid from 'react-uuid';

class Comments extends Component {

    displayComments(){
        let comments = this.props.comments.map(comment => {
            return <Comment name={comment.name} date={comment.date} comment={comment.comment} key={uuid()}/>
        })
        return comments
    }

    render() {

        return (
            <div className="Comment">
                <div className="Comments__container">
                    <h4 className="Comments__number-comments">3 Comments</h4>
                    <div className="Comments__user-container">
                        <img src={UserImage} alt="" className="Comments__user-image"/>
                        <div className="Comments__input-container">
                            <label htmlFor="textarea" className="Comments__label">Join the conversation</label>
                            <textarea name="textarea" id="" row="100" className="Comments__textarea"></textarea>
                        </div>
                        <button className="Comments__comment-btn">
                            Comment
                        </button>
                    </div>
                </div>
                

                <div className="Comment-container">
                    {this.displayComments()}
                </div>
            </div>
        );
    }
}

export default Comments;
