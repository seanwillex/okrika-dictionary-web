import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar'; // Ensure Navbar.js is in components folder
import Home from './pages/Home';
import DictionarySearch from './pages/DictionarySearch';
import WordDetails from './pages/WordDetails';
import UserProfile from './pages/UserProfile';
import Quizzes from './pages/Quizzes';
import CulturalInsights from './pages/CulturalInsights';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute'; // For authenticated routes

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dictionary" element={<DictionarySearch />} />
          <Route path="/word/:wordId" element={<WordDetails />} />
          <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route path="/quizzes" element={<ProtectedRoute><Quizzes /></ProtectedRoute>} />
          <Route path="/cultural-insights" element={<ProtectedRoute><CulturalInsights /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
