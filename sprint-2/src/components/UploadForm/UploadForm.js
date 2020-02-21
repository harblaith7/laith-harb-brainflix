import React, { Component } from 'react';
import './UploadForm.scss'

export default class UploadForm extends Component {
    render() {
        return (
            <div className="UploadForm">
                <div className="UploadForm__container">
                    <form className="UploadForm__form">
                        <div className="UploadForm__input-container">
                            <label htmlFor="title" className="UploadForm__label">Title your video</label>
                            <input type="text" name="title" className="UploadForm__input"/>
                        </div>
                        <div className="UploadForm__input-container">
                            <label htmlFor="title" className="UploadForm__label">Add a video description</label>
                            <textarea type="text" name="title" className="UploadForm__input UploadForm__input--textarea"/>
                        </div>
                        <div className="UploadForm__btn-container">
                            <input type="submit" className="UploadForm__btn UploadForm__btn--upload" value="publish"/>
                            <input type="submit" className="UploadForm__btn UploadForm__btn--cancel" value="cancel"/>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}
