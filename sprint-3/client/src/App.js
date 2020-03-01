import React, { Component } from 'react'
import Nav from './components/Nav/Nav';
import './sass/styles.scss';
import Main from './Pages/Main/Main';
import Upload from './Pages/Upload/Upload';
import {Switch, Route} from 'react-router-dom'



export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      clearCurrent : false
    }
  }

  clearCurrent = () => {
    return ""
  }

  render() {
    return (
      <>
      <Nav/>
      <Switch> 
        <Route path="/upload" component={Upload} />
        <Route path="/video/:id" component={Main}/>
        <Route path="/video" component={Main} />
        <Route path="/" component={Main} />
      </Switch>
     
    </>
    )
  }
}



