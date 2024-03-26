
import Navbar from '../Navbar/Navbar'
import Base from '../Base'

import React, { useState, useEffect } from 'react';
import  profileService from '../../Services/ProfileService';
const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const userId = 1;
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileService.getProfileById(userId); // Fetch profile by ID 1
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [userId]);

  return (
    <Base>
    <div>
      {profileData ? (
        <div>
          <h2>Profile Details</h2>
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Email: </strong>{profileData.email}</p>
          <p><strong>Address:</strong> { profileData.address }</p>
          <p><strong>Phone Number:</strong> { profileData.phonenumber }</p>
          <p><strong>Age:</strong> {profileData.age }</p>
          <p><strong>DOB:</strong> { profileData.dob }</p>
          <p><strong>User Type:</strong> {profileData.usertype }</p>
          
        </div>
      ) : (
        <p>Error fetching profile data.</p>
      )}
    </div>
    </Base>
    
  );
};

export default Profile;
