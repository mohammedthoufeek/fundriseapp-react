import React, { useState, useEffect } from 'react';
import Base from '../Base';
import profileService from '../../Services/ProfileService';
import PostService from '../../Services/PostService';
import "./Profile.css";
const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [postDetails, setPostDetails] = useState([]);
  const [showPostDetails, setShowPostDetails] = useState(false);
  const [userid, setUserId] = useState(0);

  let userDataFromLocalStorage;
  useEffect(() => {
    userDataFromLocalStorage = JSON.parse(localStorage.getItem('userData')) || {};
    setUserId(userDataFromLocalStorage.id);

    const fetchProfile = async () => {
      try {
        const data = await profileService.getProfileById(userDataFromLocalStorage.id);
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const getAllPostByUserId = () => {
    PostService.getPostByUserId(userid).then((data) => {
      setPostDetails(data);
      setShowPostDetails(true);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <Base>
      <div className="profile-container">
        {profileData ? (
          <div className="profile-box">
            <h2>Profile</h2>
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Address:</strong> {profileData.address}</p>
            <p><strong>Phone Number:</strong> {profileData.phoneNumber}</p>
            <p><strong>Age:</strong> {profileData.age}</p>
            <p><strong>DOB:</strong> {profileData.dob}</p>
            <p><strong>User Type:</strong> {profileData.userType}</p>
            <button onClick={getAllPostByUserId} className="btn btn-primary">View Details</button>
          </div>
        ) : (
          <p>Error fetching profile data.</p>
        )}
        {showPostDetails && (
          <div className="post-details">
            <h2>Post Details</h2>
            <ul className="post-list">
              {postDetails.map(post => (
                <li key={post.id} className="post-item">
                  <p><strong>Title:</strong> {post.title}</p>
                  <p><strong>Cause:</strong> {post.cause}</p>
                  <p><strong>Details:</strong> {post.details}</p>
                  <p><strong>Amount Needed:</strong> {post.amountNeeded}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Base>
  );
};

export default Profile;
