import React from 'react';
import { Button, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero-image.jpg'; // Add your hero image in assets folder

const LandingPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: 2
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Learn Okrika with Ease
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 4 }}>
          Explore the rich language and culture of Okrika through our comprehensive dictionary.
        </Typography>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: 20, padding: '10px 30px' }}
        >
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Comprehensive Dictionary
                </Typography>
                <Typography variant="body1">
                  Access a vast collection of Okrika words with English translations, usage examples, and much more.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Learn on the Go
                </Typography>
                <Typography variant="body1">
                  Practice your language skills with interactive quizzes and lessons wherever you are.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Cultural Insights
                </Typography>
                <Typography variant="body1">
                  Dive deeper into the culture, idioms, and proverbs of the Okrika people to enrich your learning experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Why Learn Okrika Section */}
      <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
          Why Learn Okrika?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Okrika is a fast-dying language, and it's essential to preserve it for future generations. By learning Okrika, you're helping to keep the culture alive.
        </Typography>
        <Button component={Link} to="/signup" variant="outlined" color="primary" size="large">
          Join the Movement
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
