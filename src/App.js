import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
// import About from './pages/About';
// import Pricing from './pages/Pricing';
// import RequestADemo from './pages/RequestADemo';
import ScrollToTop from './components/ScrollToTop';
import BodyClass from './components/BodyClass'; // Import the BodyClass component

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <BodyClass /> {/* Add the BodyClass component here */}
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
           { /* <Route path="about" element={<About />} />
         <Route path="pricing" element={<Pricing />} /> 
            <Route path="request-a-demo" element={<RequestADemo />} /> 
            <Route path="home" element={<Navigate to="/" replace />} /> */}
          </Route> 
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
