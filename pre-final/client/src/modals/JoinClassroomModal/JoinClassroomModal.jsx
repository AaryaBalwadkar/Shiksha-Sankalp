import React, { useState } from "react";
import './JoinClassroomModal.css'
import { useClassroomAndChannelStore } from "../../store/ClassroomStore.js";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const JoinClassroomModal = () => {
  const location = useLocation()
  const classroomId = location.state?.classroomId;
  console.log(classroomId)
  const [code, setCode] = useState("");

  const { joinClassroom } = useClassroomAndChannelStore();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send data to backend
      await joinClassroom(code);
      navigate("/home");
    } catch (error) {
      console.log("Something went wrong: ", error.message);
    }
  };

  return (
    <div className="main">
      <div className="addClassroom">
        <div className="container">
          <div className="title">Create Channel</div>
          <div>Enter 6 digit classroom code</div>
          <form className="form-box login-form" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                className="field"
                placeholder="Enter Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <button type="submit" className="inputs submit-btn">
              Join Classroom
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinClassroomModal;