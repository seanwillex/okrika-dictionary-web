// src/pages/WordDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Paper } from '@mui/material';
import { dictionary } from '../data/dictionary';

const WordDetails = () => {
  const { word } = useParams();

  // Find the word details in the dictionary
  const wordDetails = dictionary.find((entry) => entry.word.toLowerCase() === word.toLowerCase());

  if (!wordDetails) {
    return <Typography variant="h6">Word not found.</Typography>;
  }

  return (
    <Box sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>{wordDetails.word}</Typography>
        <Typography variant="body1"><strong>Meaning:</strong> {wordDetails.meaning}</Typography>
        <Typography variant="body1"><strong>Part of Speech:</strong> {wordDetails.partOfSpeech}</Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          <strong>Okrika Example:</strong> {wordDetails.okrikaExample}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          <strong>English Example:</strong> {wordDetails.englishExample}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          <strong>Cultural Insight:</strong> {wordDetails.culturalInsight}
        </Typography>
      </Paper>
    </Box>
  );
};

export default WordDetails;
