import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Screens/reviewOne/index';
import CMS from './Screens/reviewTwo/index'
import UI from './Screens/reviewthree/index'
import Ecommerce from './Screens/reviewFour/index'
import Index from './AllRendering/index'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/CMS" element={<CMS />} />
          <Route path="/UI_UX_design" element={<UI />} />
          <Route path="/Ecommerce" element={<Ecommerce />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

