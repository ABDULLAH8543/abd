import React from 'react'
import Navbar from '../Screens/navbar/navbar'
import TopIndex from '../Screens/TopComponent/index'
import Services from '../Screens/services/index'
// import Project from '../Scr  eens/Project/index'
import Contact from '../Screens/Contact/index'
import About from '../Screens/about/index'
import './style.css'

const App = () => {
  return (
    <div id='main'>
    <Navbar/>
    <TopIndex/>
    <Services/>
    {/* <Project/> */}
    <About/>
    <Contact/>
    </div>
  ) 
}

export default App