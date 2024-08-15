import React from 'react'
import Navbar from '../Screens/navbar/navbar'
import TopIndex from '../Screens/TopComponent/index'
import Services from '../Screens/services/index'
import Contact from '../Screens/Contact/index'
import About from '../Screens/about/index'
import './style.css'

const App = () => {
  return (
    <div id='main'>
    <Navbar/>
    <TopIndex/>
    <Services/>
    <About/>
    <Contact/>
    </div>
  ) 
}

export default App