import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container text-center">
      <h1 className="welcome-title">Employee Registration App!</h1>
      <p className="welcome-description">
        We're excited to have you here. Please register to get started and unlock exclusive features!
      </p>
      <Link to="/create" className="btn btn-primary">
        Create Now
      </Link>
    </div>
  );
};

export default Welcome;
