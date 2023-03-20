import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UpdateUser, TokenVerification } from './hooks/auth';
import App from './pages/App';
import Authentication from './pages/Authentication';

const PublicRoute = ({ children }) => {
  const user = UpdateUser();
  return user ? <Navigate to="/" /> : children;
};

const ProtectedRoute = ({ children }) => {
  const user = UpdateUser();
  TokenVerification();
  return user ? children : <Navigate to="/login" replace />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute><Authentication /></PublicRoute>}/>
        <Route path="/signUp" element={<PublicRoute><Authentication /></PublicRoute>}/>
        <Route path="/" element={<ProtectedRoute><App /></ProtectedRoute>}>
          <Route path="test" element={<App />}/>
          <Route path="SS" element={<App />}/>
          <Route path="DDD" element={<App />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
