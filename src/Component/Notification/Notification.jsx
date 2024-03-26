import React from 'react'
import Navbar from '../Navbar/Navbar'
import Base from '../Base'

import "./Notification.css";
//import { signin } from '../../Services/UserService';
import { useState, useEffect } from 'react';
import  notificationService from '../../Services/NotificationService';



const Notification = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);
  
  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await notificationService.getAllNotificationsByUserId(userId);
      setNotifications(data);
    };

    fetchNotifications();
  }, [userId]);

  return (
    <Base>
    <div>
    <div>
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="notification-list">
          {notifications.map(notification => (
            <li key={notification.id} className="notification-box">
              <div className="message">{notification.message}</div>
              <div className="datetime">{notification.date}, {notification.time}</div>
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
