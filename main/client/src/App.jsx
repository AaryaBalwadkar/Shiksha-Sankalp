import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signUp/SignUp.jsx'
import newS from './pages/signUp/newS.jsx'
import EmailVerification from './pages/emailVerification/EmailVerification.jsx'
import { Toaster } from 'react-hot-toast'
import HomePage from './pages/app/HomePage/HomePage.jsx'
import { useAuthStore } from './store/AuthStore.js'

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={"Home"} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<newS />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/verify-email" element={<EmailVerification />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
