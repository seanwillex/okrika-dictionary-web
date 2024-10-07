import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const WordDetails = () => {
  const { wordId } = useParams();

  const wordDetails = {
    obiri: {
      meaning: 'dog',
      example: 'The dog barks at night.',
      exampleOkrika: 'Obiri nemi ribe ngbodo.',
    },
    // Add more word details here
  };

  const word = wordDetails[wordId];

  if (!word) {
    return <Typography>Word not found.</Typography>;
  }

  return (
    <Box textAlign="center" p={3}>
      <Typography variant="h4">{wordId}</Typography>
      <Typography variant="h6">Meaning: {word.meaning}</Typography>
      <Typography variant="h6">Example in English: {word.example}</Typography>
      <Typography variant="h6">Example in Okrika: {word.exampleOkrika}</Typography>
    </Box>
  );
};

export default WordDetails;
