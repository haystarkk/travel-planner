import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Itinerary from './pages/Itinerary';

function App() {
  return (
    <Router>
      <div className="App min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;