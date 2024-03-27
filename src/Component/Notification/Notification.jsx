import React from 'react'
import Navbar from '../Navbar/Navbar'
import Base from '../Base'
import { useNavigate } from 'react-router-dom';
import "./Notification.css";
//import { signin } from '../../Services/UserService';
import { useState, useEffect } from 'react';
import  notificationService from '../../Services/NotificationService';
import PostService from '../../Services/PostService';



const Notification = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData")) || {};
    const fetchNotifications = async () => {
      const data = await notificationService.getAllNotificationsByUserId(userDataFromLocalStorage.id);
      setNotifications(data);
    };

    fetchNotifications();
  }, [userId]);

  const viewPostDetails = (id) => {
    setSelectedPostId(id);
    console.log(id);
    navigate(`/post/${id}`);
  };
  return (
    <Base>
    <div>
    <div>

      <h2 style={{ color: '#1e1f5c' }}>Notifications</h2>

      <h2>Notifications</h2>

      {notifications.length > 0 ? (
        <ul className="notification-list">
          {notifications.map(notification => (
            <li key={notification.id} className="notification-box">
              <div className="message">{notification.message}</div>
              <div className="datetime">{notification.date}, {notification.time}</div>

              <button onClick={() => viewPostDetails(notification.post.id)} className="btn btn-primary">View Details</button>

            </li>
          ))}
        </ul>
      ) : (
        <p className="noNotification">No notifications Yet!!</p>
      )}
    </div>
    </div>
    </Base>
    
  );
};

export default Notification;
