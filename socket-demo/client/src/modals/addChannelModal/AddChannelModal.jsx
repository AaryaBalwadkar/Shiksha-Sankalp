import React, { useState } from "react";
import "./AddChannelModal.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useClassroomAndChannelStore } from "@/store/ClassroomStore";

const AddChannelModal = () => {
  const location = useLocation()
  const classroomId = location.state?.classroomId;
  
  const [channelName, setChannelName] = useState("");

  const { addChannel } = useClassroomAndChannelStore()
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send data to backend
      console.log(classroomId)
      await addChannel(classroomId, channelName, isChecked);
      navigate(`/home/${classroomId}`);
    } catch (error) {
      console.log("Something went wrong: ", error.message);
    }
  };

  return (
    <div className="main">
      <div className="addChannel">
        <div className="container">
          <div className="title">Create Channel</div>
          <form className="form-box login-form" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                className="field"
                placeholder="Channel Name"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
              />
            </div>
            <label className="label-for-checkbox">
              Do you want to lock this channel?
              <input
                className="check-box"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </label>
            <button type="submit" className="inputs submit-btn">
              Create Channel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChannelModal;