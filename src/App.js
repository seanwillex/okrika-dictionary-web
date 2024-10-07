// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box, Grid, Paper } from '@mui/material';
import Home from './pages/Home';
import DictionarySearch from './pages/DictionarySearch';
import WordDetails from './pages/WordDetails';
import UserProfile from './pages/UserProfile';
import Quizzes from './pages/Quizzes';
import CulturalInsights from './pages/CulturalInsights';

const dictionary = [
  { word: 'Obiri', meaning: 'Dog' },
  { word: 'Inji', meaning: 'Fish' },
];

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Okrika Dictionary
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/dictionary-search">Dictionary Search</Button>
          <Button color="inherit" component={Link} to="/quizzes">Quizzes</Button>
          <Button color="inherit" component={Link} to="/cultural-insights">Cultural Insights</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ flexGrow: 1, marginTop: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dictionary-search" element={<DictionarySearch dictionary={dictionary} />} />
                  <Route path="/word-details/:word" element={<WordDetails />} />
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/quizzes" element={<Quizzes />} />
                  <Route path="/cultural-insights" element={<CulturalInsights />} />
                </Routes>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
