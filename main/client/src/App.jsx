import React, { useEffect } from 'react'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import EmailVerification from './pages/emailVerification/EmailVerification.jsx'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from './store/AuthStore.js'
import AddClassroom from './pages/pagesForEditables/addClassroom/AddClassroom.jsx'
import Channel from './components/channelSidebar/Channel.jsx'

const RedirectAuthenticatedUser = ((children) => {
  const {isAuthenticated, user} = useAuthStore()

  if(isAuthenticated && user.isVerified){
    return <Navigate to="/home" replace />
  }
})

const App = () => {
  const {isCheckingAuth, checkAuth, isAuthenticated, user} = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log("isAuthenticated : ", isAuthenticated)
  console.log("user : ", user)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={"WebPage"} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<RedirectAuthenticatedUser>
            <Signup />
            </RedirectAuthenticatedUser>} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/addclassroom" element={<AddClassroom />} />
          <Route path="/classroom/:classroomId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

