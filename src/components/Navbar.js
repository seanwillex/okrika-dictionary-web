import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signOut(auth);
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo or Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Okrika Dictionary</Link>
        </Typography>

        {/* Conditionally render buttons based on user's auth status */}
        {user ? (
          <>
            {/* Menu items visible when user is logged in */}
            <Button color="inherit" component={Link} to="/dictionary">Dictionary</Button>
            <Button color="inherit" component={Link} to="/quizzes">Quizzes</Button>
            <Button color="inherit" component={Link} to="/cultural-insights">Cultural Insights</Button>
            <Button color="inherit" component={Link} to="/profile">Profile</Button>

            {/* Avatar for logged-in users */}
            <IconButton onClick={handleMenuClick} color="inherit">
              <Avatar alt={user.displayName || 'User'} src={user.photoURL || '/static/images/avatar/1.jpg'} />
            </IconButton>

            {/* Dropdown menu for profile and logout */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            {/* Login and Sign Up buttons for users who are not logged in */}
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
