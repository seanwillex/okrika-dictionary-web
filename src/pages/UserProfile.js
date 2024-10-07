import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { updateProfile } from 'firebase/auth';

const UserProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || ''); // Populate with current display name
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    if (user) {
      try {
        await updateProfile(user, { displayName });
        alert('Profile updated successfully!');
      } catch (error) {
        console.error(error);
        alert('Failed to update profile');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <>
          <p>Email: {user.email}</p>
          <div>
            <label>Display Name:</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <button onClick={handleUpdateProfile}>Update Profile</button>
        </>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
};

export default UserProfile;
