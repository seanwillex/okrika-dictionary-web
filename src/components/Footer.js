import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center' }}>
      <Typography variant="body2" sx={{ color: 'white' }}>
        © {new Date().getFullYear()} Okrika Dictionary. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="/privacy-policy" color="inherit" underline="none">Privacy Policy</Link> | 
        <Link href="/terms" color="inherit" underline="none">Terms of Use</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
