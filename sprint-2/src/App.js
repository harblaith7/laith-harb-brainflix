import React from 'react'
import Nav from './components/Nav/Nav';
import './sass/styles.scss';
import Main from './Pages/Main/Main';
import Upload from './Pages/Upload/Upload'



export default function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Upload/>
    </>
  )
}
