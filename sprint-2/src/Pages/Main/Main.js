import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Video from '../../components/Video/Video';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import Comments from '../../components/Comments/Comments';
import VideoSections from '../../components/Video-Sections/VideoSections';
import './Main.scss';
import axios from 'axios';



class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      title : "",
      comments : [],
      videos : [],
      currentVideo : {},
      showMainVideo: false,
      currentVideoId : ""
    }
    this.getVideoId = this.getVideoId.bind(this)
  }

  componentDidMount(){

    let api_key = 'bb5b8d57-5d03-4198-9a95-61ee9d08395f';
    let api_url = 'https://project-2-api.herokuapp.com'

    axios.get(`${api_url}/videos?api_key=${api_key}`)
        .then(response => {
            
            this.setState({
                videos : response.data
            }, () => {
              axios.get(`https://project-2-api.herokuapp.com/videos/${this.state.videos[0].id}?api_key=$bb5b8d57-5d03-4198-9a95-61ee9d08395f`)
        .then(response => {
    
          this.setState({
            currentVideo : response.data,
            comments: response.data.comments
          })
        })
            })
        }).catch(error => {
            console.log(error)
        })
        
        

      
  }

  componentDidUpdate(prevProps, prevState){

    if(prevProps.match.params.id !== this.props.match.params.id){
      
  
        if(this.props.match.params.id){
          axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=$bb5b8d57-5d03-4198-9a95-61ee9d08395f`)
          .then(response => {

            this.setState({
              currentVideo : response.data,
              comments: response.data.comments
            })
          })
        } else {

          axios.get(`https://project-2-api.herokuapp.com/videos/${this.state.videos[0].id}?api_key=$bb5b8d57-5d03-4198-9a95-61ee9d08395f`)
        .then(response => {
    
          this.setState({
            currentVideo : response.data,
            comments: response.data.comments
          })
        })
        }
      
    }
    
    console.log('Mine',this.props.match.params.id)
    if(prevState.currentVideo !== this.state.currentVideo){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  

  getVideoId(id){
   
     
       
    }
    
    

  getTitle = (title) => {
    this.setState({
      title : title
    })
  }

  getComments = (comments) => {
    console.log(comments)
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
              <Comments comments = {this.state.comments}/>
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
