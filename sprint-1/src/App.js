import React from 'react';
import Nav from './components/Nav/Nav';
import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import Comments from './components/Comments/Comments';
import VideoSections from './components/Video-Sections/VideoSections';
import './App.scss';
import './sass/styles.scss'



function App() {
  return (
    <div className="App">
      <div className="App__container">
          <Nav/>
          <Video/>
         <div className="App__bottom-container">
          <div className="App__left-container">
            <VideoInfo/>
            <Comments/>
          </div>
          <div className="App__right-container">
            <VideoSections/>
          </div>
         </div> 
        
      </div>
    </div>
  );
}

export default App;
