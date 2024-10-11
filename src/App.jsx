import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EditPost from './EditPost';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import BMI from './BMI';
import AddPost from './AddPost';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/edit/:postId" element={<EditPost />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/BMI" element={<BMI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;