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
import AddClassroomModal from "./modals/addClassroomModal/AddClassroomModal.jsx";
import JoinClassroom from "./pages/pagesForEditables/JoinClassroom/JoinClassroom.jsx";
import ConfirmDelete from "./pages/pagesForEditables/confirmDelete/ConfirmDelete.jsx";
import ConfirmRemove from "./pages/pagesForEditables/confirmRemove/ConfirmRemove.jsx";
import LandingPage from "./pages/website/LandingPage.jsx";

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
          <Route path="/*" element={<LandingPage />} />
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
          <Route
            path="/home/joinclassroom"
            element={
              isAuthenticated ? <JoinClassroom /> : <Navigate to="/login" />
            }
          />
          <Route path="/home/confirmdeletion" element={<ConfirmDelete />}/>
          <Route path="/home/confirmremove" element={<ConfirmRemove />}/>
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/home/:id/:channelName/:channelid" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
