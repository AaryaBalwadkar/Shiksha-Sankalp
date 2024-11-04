import React, { useEffect } from "react";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import EmailVerification from "./pages/emailVerification/EmailVerification.jsx";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/AuthStore.js";
import AddClassroom from "./pages/pagesForEditables/addClassroom/AddClassroom.jsx";
import AddChannelModal from "./modals/addChannelModal/AddChannelModal.jsx";
import AddChannel from "./pages/pagesForEditables/addChannel/AddChannel.jsx";

const App = () => {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // console.log("isAuthenticated : ", isAuthenticated);
  // console.log("user : ", user);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={"WebPage"} />
          <Route
            path="/home/*"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />

          {/* Auth Pages: Redirect to Home if already authenticated */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/home" /> : <Signup />}
          />
          <Route path="/email-verification" element={<EmailVerification />} />

          {/* Protected Route for Adding Classroom */}
          <Route
            path="/home/addclassroom"
            element={
              isAuthenticated ? <AddClassroom /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/home/addchannel"
            element={
              isAuthenticated ? <AddChannel /> : <Navigate to="/login" />
            }
          />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/home/:id/:channelName/:channelid" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
