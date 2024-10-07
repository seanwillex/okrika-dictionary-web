// src/pages/DictionarySearch.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, List, ListItem, ListItemText, Typography } from '@mui/material';
import { dictionary } from '../data/dictionary';

const DictionarySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (dictionary && Array.isArray(dictionary)) {
      const results = dictionary.filter((entry) =>
        entry.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.meaning.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Dictionary Search</Typography>
      <TextField
        label="Search for a word..."
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch} sx={{ marginTop: 2 }}>
        Search
      </Button>
      <List sx={{ marginTop: 4 }}>
        {searchResults.length > 0 ? (
          searchResults.map((entry, index) => (
            <ListItem button component={Link} to={`/word-details/${entry.word}`} key={index}>
              <ListItemText primary={entry.word} secondary={entry.meaning} />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            No results found. Try searching for another word.
          </Typography>
        )}
      </List>
    </div>
  );
};

export default DictionarySearch;
