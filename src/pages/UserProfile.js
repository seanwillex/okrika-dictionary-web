import React, { useState, useEffect } from "react";
import { auth, storage, db } from "../firebaseConfig"; // Ensure db and storage are imported
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { Avatar, Button, TextField, CircularProgress, Box } from "@mui/material";

const UserProfile = () => {
  const [displayName, setDisplayName] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setDisplayName(userDoc.data().displayName || "");
          setProfilePicUrl(userDoc.data().profilePicUrl || "");
        }
      };
      fetchData();
    }
  }, [user]);

  const handleSave = async () => {
    setLoading(true);
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, { displayName });
      alert("Profile updated successfully!");
    }
    setLoading(false);
  };

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      const fileRef = ref(storage, `profilePictures/${user.uid}`);
      await uploadBytes(fileRef, file);
      const fileUrl = await getDownloadURL(fileRef);
      await updateDoc(doc(db, "users", user.uid), { profilePicUrl: fileUrl });
      setProfilePicUrl(fileUrl);
      setUploading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Profile Management</h2>
      
      {profilePicUrl ? (
        <Avatar src={profilePicUrl} sx={{ width: 100, height: 100 }} />
      ) : (
        <Avatar sx={{ width: 100, height: 100 }}>{displayName.charAt(0)}</Avatar>
      )}

      <input type="file" onChange={handleProfilePicChange} />
      {uploading && <CircularProgress />}

      <TextField
        label="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        sx={{ mt: 2, mb: 2 }}
      />

      <Button variant="contained" onClick={handleSave} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Save"}
      </Button>
    </Box>
  );
};

export default UserProfile;
