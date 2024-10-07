import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box textAlign="center" p={3}>
      <Typography variant="h3" gutterBottom>
        Welcome to Okrika Dictionary
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/dictionary">
        Start Searching
      </Button>
    </Box>
  );
};

export default Home;
