import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Thumbnail from '../../components/VideoThumbnail/VideoThumnail';
import UploadForm from '../../components/UploadForm/UploadForm';

export default class Upload extends Component {
    render() {
        return (
            <>
                <Thumbnail/>
                <UploadForm/>
            </>
        )
    }
}
