import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Video from '../../components/Video/Video';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import Comments from '../../components/Comments/Comments';
import VideoSections from '../../components/Video-Sections/VideoSections';
import './Main.scss';
import axios from 'axios';
import uuid from 'uuid'

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      title : "",
      comments : [],
      videos : [],
      currentVideo : {},
      showMainVideo: false,
      currentVideoId : "",
      newComment: ""
    }
  }

  
  getNewComment = (comment) => {
    
    axios.post(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/comments?api_key=$bb5b8d57-5d03-4198-9a95-61ee9d08395f`, {
      comment,
      name: 'Laith Harb'
    }).then(({data}) => {
      console.log(data)
      this.setState({
        comments : [ {
          comment: data.comment,
          id: data.id,
          likes: data.likes,
          name: data.name,
          timestamp: data.timestamp
        }, ...this.state.comments]
      })
    })
    

    this.setState({
      newComment : comment
    })
  }

  

  getCurrentVideo = (id) => {
    axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=$bb5b8d57-5d03-4198-9a95-61ee9d08395f`)
          .then(response => {
            this.setState({
              currentVideo : response.data,
              comments: response.data.comments
            })
          })
          .catch(error => {
            console.log(error)
          })
  }

  componentDidMount(){

    let api_key = 'bb5b8d57-5d03-4198-9a95-61ee9d08395f';
    let api_url = 'https://project-2-api.herokuapp.com'

    axios.get(`${api_url}/videos?api_key=${api_key}`)
        .then(response => {
            this.setState({
                videos : response.data
            }, () => {
              this.getCurrentVideo(this.state.videos[0].id)
            })
        }).catch(error => {
            console.log(error)
        })
  }

  componentDidUpdate(prevProps, prevState){

    if(prevProps.match.params.id !== this.props.match.params.id){

        if(this.props.match.params.id){
          this.getCurrentVideo(this.props.match.params.id)
        } else {
          this.getCurrentVideo(this.state.videos[0].id)
        }
    }
    
    if(prevState.currentVideo !== this.state.currentVideo){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }


  render(){
    return (
      <div className="App">
        <div className="App__container">
            <Video videoImage = {this.state.currentVideo.image}/>
          <div className="App__bottom-container">
            <div className="App__left-container">
              <VideoInfo 
                currentVideo={this.state.currentVideo}
              />
              <Comments comments = {this.state.comments} transferComments = {this.getNewComment}/>
            </div>
            <div className="App__right-container">
              <VideoSections currentVideoName = {this.state.currentVideo.title} videos={this.state.videos} transferId={this.getVideoId}/>
            </div>
          </div> 
          
        </div>
      </div>
    );
  }
}

export default Main;
