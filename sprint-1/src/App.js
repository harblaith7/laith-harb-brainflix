import React from 'react';
import Nav from './components/Nav/Nav';
import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import Comments from './components/Comments/Comments';
import VideoSections from './components/Video-Sections/VideoSections'
import './sass/styles.scss'



function App() {
  return (
    <div className="App">
      <Nav/>
      <Video/>
      <VideoInfo/>
      <Comments/>
      <VideoSections/>
    </div>
  );
}

export default App;
