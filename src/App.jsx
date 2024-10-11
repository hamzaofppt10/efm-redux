import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import BMI from "./BMI";
import Home from "./Home";
import EditPost from "./EditPost";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/edit/:postId" element={<EditPost />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
