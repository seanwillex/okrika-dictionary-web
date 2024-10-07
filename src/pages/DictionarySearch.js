import React, { useState } from 'react';
import { TextField, Button, Typography, Box, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

const DictionarySearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const dictionary = [
      { word: 'obiri', meaning: 'dog' },
      { word: 'mmai', meaning: 'two' },
    ];

    const filteredResults = dictionary.filter(
      (entry) => entry.word.includes(query.toLowerCase()) || entry.meaning.includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <Box textAlign="center" p={3}>
      <Typography variant="h4" gutterBottom>
        Search the Dictionary
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <List>
        {results.length > 0 ? (
          results.map((entry, index) => (
            <ListItem key={index}>
              <Typography>
                {entry.word} - {entry.meaning} 
                <Button component={Link} to={`/word/${entry.word}`}>Details</Button>
              </Typography>
            </ListItem>
          ))
        ) : (
          <Typography>No results found. Try searching for another word.</Typography>
        )}
      </List>
    </Box>
  );
};

export default DictionarySearch;
