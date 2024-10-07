// src/pages/SignUp.js
import React, { useState } from "react";
import { TextField, Button, Typography, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; 

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Save additional info (name, age, country) to Firestore
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError("Sign Up failed. Please try again.");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Age"
        variant="outlined"
        fullWidth
        margin="normal"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <TextField
        label="Country"
        variant="outlined"
        fullWidth
        margin="normal"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignUp}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Sign Up"}
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
