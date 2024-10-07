import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path if needed
import LandingPage from './pages/LandingPage'; // Your new landing page
import DictionarySearch from './pages/DictionarySearch';
import UserProfile from './pages/UserProfile';
import Quizzes from './pages/Quizzes';
import CulturalInsights from './pages/CulturalInsights';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dictionary" element={<DictionarySearch />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/cultural-insights" element={<CulturalInsights />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
