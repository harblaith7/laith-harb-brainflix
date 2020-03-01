import React, { Component } from 'react';
import './UploadForm.scss'
import axios from 'axios'

export default class UploadForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: ""
        }
        
    }

    changeInputState = (e) => {
        
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    clearInputField = () => {
        this.setState({
            title: "",
            description: ""
        })
    }

    postVideo = (e) => {
        
        e.preventDefault()
        
        axios.post('video/upload', {
            title : this.state.title,
            description: this.state.description
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })

        this.clearInputField()

    }

    render() {
        return (
            <div className="UploadForm">
                <div className="UploadForm__container">
                    <form className="UploadForm__form" onSubmit={this.postVideo}>
                        <div className="UploadForm__input-container">
                            <label htmlFor="title" className="UploadForm__label">Title your video</label>
                            <input 
                                type="text" 
                                name="title" 
                                className="UploadForm__input"
                                onChange={this.changeInputState}
                                value={this.state.title}
                                required
                                placeholder="Add a title to your video"
                            />
                        </div>
                        <div className="UploadForm__input-container">
                            <label htmlFor="title" className="UploadForm__label">Add a video description</label>
                            <textarea 
                                type="text" 
                                name="description" 
                                className="UploadForm__input UploadForm__input--textarea"
                                onChange={this.changeInputState}
                                value={this.state.description}
                                required
                                placeholder="Add a description of your video"
                            />
                        </div>
                        <div className="UploadForm__btn-container">
                            <input 
                                type="submit" 
                                className="UploadForm__btn UploadForm__btn--upload" 
                                id="submitBtn" 
                                value="publish"/>
                            <input 
                                type="button" 
                                className="UploadForm__btn UploadForm__btn--cancel" 
                                id="cancelBtn" 
                                value="cancel"
                                onClick = {this.clearInputField}
                                />
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}
