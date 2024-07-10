import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import './App.css';

const Login = lazy(() => import('./pages/login/Login'));
const Signup = lazy(() => import('./pages/signup/Signup'));
const Home = lazy(() => import('./pages/home/Home'));

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
          <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />} />
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  );
}

export default App;
