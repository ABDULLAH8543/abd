import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reviews from './Screens/reviews/index';
import Index from './AllRendering/index'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/review" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

