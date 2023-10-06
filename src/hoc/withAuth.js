import React from 'react';
import { useAuth } from './../customHooks';
import { useNavigate } from 'react-router-dom';

const WithAuth = ({ children }) => {
  const isAuthenticated = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return <>{children}</>;
};

export default WithAuth;
