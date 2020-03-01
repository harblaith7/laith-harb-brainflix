import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Thumbnail from '../../components/VideoThumbNail/VideoThumbNail';
import UploadForm from '../../components/UploadForm/UploadForm';
import './Upload.scss'

export default class Upload extends Component {
    render() {
        return (
            <div className="Upload">
                <Thumbnail/>
                <UploadForm/>
            </div>
        )
    }
}
