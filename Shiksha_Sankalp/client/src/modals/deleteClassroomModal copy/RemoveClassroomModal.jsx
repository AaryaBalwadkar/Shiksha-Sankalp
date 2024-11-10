import React, { useState } from "react";
import './RemoveClassroomModal.css'
import { useClassroomAndChannelStore } from "../../store/ClassroomStore.js";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RemoveClassroomModal = () => {
  const location = useLocation()
  const classroomId = location.state?.classroomId;
  const [code, setCode] = useState("");

  const { removeClassroom } = useClassroomAndChannelStore();
  const navigate = useNavigate();

  const handleRemove = async (e) => {
    e.preventDefault()
    try {
      await removeClassroom(classroomId)
      navigate('/home')
    } catch (error) {
      console.log("Error in handling delete classroom")
    }
  }

  return (
    <div className="main">
      <div className="addClassroom">
        <div className="container">
          <div className="title">Unsuscribe</div>
          <div className="error-message">Do you really want to unsubscribe from this classroom?</div>
          <form className="form-box login-form" onClick={handleRemove}>
            <button type="submit" className="inputs submit-btn">
              Confirm Deletion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RemoveClassroomModal;