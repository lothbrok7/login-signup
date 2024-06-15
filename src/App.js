import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/sub/signup';
import Login from './components/sub/login';
import Profile from './components/sub/profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<SignUp />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
