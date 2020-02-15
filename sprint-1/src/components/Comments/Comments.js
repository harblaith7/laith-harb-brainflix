import React, { Component } from 'react';
import './Comments.scss';
import Comment from './Comment/Comment'
import UserImage from './Mohan-muruge.jpg';

class Comments extends Component {

    constructor(props){
        super(props)
        this.state = {
            comments : [
                {
                    name: "Micheal Lyons",
                    date: "12/18/2018",
                    comment: "They BLEW the ROOF off at their last show, once everyone startedfiguring out they were going. This isstill simply the greatest opening of aconcert I have EVER witnessed."
                },
                {
                    name: "Gary Wong",
                    date: "12/18/2018",
                    comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
                },
                {
                    name: "Theodore Duncan",
                    date: "11/15/2018",
                    comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
                }
            ]
        }

        this.displayComments = this.displayComments.bind(this)
    }

    displayComments(){
        let comments = this.state.comments.map(comment => {
            return <Comment name={comment.name} date={comment.date} comment={comment.comment}/>
        })
        return comments
    }

    render() {

        console.log(this.displayComments())
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

/* 

<div className="Comments">
                <div className="Comments__container">
                    <h4 className="Comments__number-comments">3 Comments</h4>
                    <div className="Comments__textarea-container">
                        <div className="Comments__user-container">
                            <img src={UserImage} alt="" className="Comments__user-image"/>
                            <div className="Comments__input-container">
                                <label htmlFor="textarea" className="Comments__label">Join the conversation</label>
                                <textarea name="textarea" id="" row="100" className="Comments__textarea"></textarea>
                            </div>
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

            */