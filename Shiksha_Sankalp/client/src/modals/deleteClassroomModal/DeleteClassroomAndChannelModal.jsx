import React, { useState } from "react";
import './DeleteClassroomAndChannelModal.css'
import { useClassroomAndChannelStore } from "../../store/ClassroomStore.js";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DeleteClassroomModal = () => {
  const location = useLocation()
  const id = location.state?.id;
  const [code, setCode] = useState("");

  const { deleteClassroom } = useClassroomAndChannelStore();
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      await deleteClassroom(id)
      navigate('/home')
    } catch (error) {
      console.log("Error in handling delete classroom")
    }
  }

  return (
    <div className="main">
      <div className="addClassroom">
        <div className="container">
          <div className="title">Confirm Deletion</div>
          <div className="error-message">Do you really want to delete?</div>
          <form className="form-box login-form" onClick={handleDelete}>
            <button type="submit" className="inputs submit-btn">
              Confirm Deletion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteClassroomModal;