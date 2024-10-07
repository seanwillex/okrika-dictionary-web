// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box, Grid, Paper } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Okrika Dictionary</Typography>
      <Box sx={{ flexGrow: 1, marginTop: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Button variant="contained" color="primary" component={Link} to="/dictionary-search" fullWidth>
                Dictionary Search
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Button variant="contained" color="primary" component={Link} to="/quizzes" fullWidth>
                Quizzes
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Button variant="contained" color="primary" component={Link} to="/cultural-insights" fullWidth>
                Cultural Insights
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Button variant="contained" color="primary" component={Link} to="/profile" fullWidth>
                Profile
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
