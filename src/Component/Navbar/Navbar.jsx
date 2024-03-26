import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './Navbar.css'; // Import the custom CSS file for additional styling

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/addpost" className="nav-link">Add Post</Link>
              </li>
              <li className="nav-item">
                <Link to="/notification" className="nav-link">Notifaction</Link>
              </li>
              <li className="nav-item">
                <Link to="/bankaccount" className="nav-link">Bank Account</Link>
              </li>
              <li className="nav-item">
                <Link to="/transaction" className="nav-link">Transaction</Link>
              </li>
              <li className="nav-item">
                <Link to="/message" className="nav-link">Message</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">Profile</Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">SignOut</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      </div>
  );
}

export default Navbar;
