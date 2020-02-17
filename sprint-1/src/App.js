import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import Comments from './components/Comments/Comments';
import VideoSections from './components/Video-Sections/VideoSections';
import './App.scss';
import './sass/styles.scss'



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      title : "",
      comments : []
    }
  }

  getTitle = (title) => {
    this.setState({
      title : title
    })
  }

  getComments = (comments) => {
    this.setState({
      comments : comments
    })
  }

  render(){

  return (
    <div className="App">
      <div className="App__container">
          <Nav/>
          <Video />
         <div className="App__bottom-container">
          <div className="App__left-container">
            <VideoInfo getTitle={this.getTitle} getComments={this.getComments}/>
            <Comments comments = {this.state.comments}/>
          </div>
          <div className="App__right-container">
            <VideoSections currentVideoName = {this.state.title}/>
          </div>
         </div> 
        
      </div>
    </div>
  );
}
}

export default App;
