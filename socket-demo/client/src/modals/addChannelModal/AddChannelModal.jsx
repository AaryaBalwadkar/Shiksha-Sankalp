import React, { useState } from "react";
import "./AddChannelModal.css";
import { useClassroomAndChannelStore } from "../../store/ClassroomStore.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AddChannelModal = () => {
  const location = useLocation()
  const classroomId = location.state?.classroomId;
  console.log(classroomId)
  const [classroomName, setClassroomName] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null); 

  const { addClassroom } = useClassroomAndChannelStore();
  const navigate = useNavigate();

  // Handle file change and preview generation
  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (validateFile(selectedFile)) {
      const base64 = await convertToBase64(selectedFile);
      setFile(base64);
      console.log(base64)
      setPreview(URL.createObjectURL(selectedFile)); // Preview for UI
    }
  };

  // File validation
  const validateFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setError(null);
      return true;
    } else {
      setError("Only image files are allowed!");
      return false;
    }
  };

  // Convert file to Base64 string
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send data to backend
      await addClassroom(classroomName, file);
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
          <form className="form-box login-form" onSubmit={handleSubmit}>
            {/* <div className="upload-container">
              <div className="dropzone">
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="fileInput" className="upload-label">
                  {file ? "Image Selected" : "Drag & Drop or Click to Upload"}
                </label>
              </div>
              {error && <p className="error-message">{error}</p>}
              {preview && (
                <div className="preview">
                  <img src={preview} alt="Preview" />
                </div>
              )}
            </div> */}
            <div className="input-box">
              <input
                type="text"
                className="field"
                placeholder="Classroom Name"
                value={classroomName}
                onChange={(e) => setClassroomName(e.target.value)}
              />
            </div>
            <button type="submit" className="inputs submit-btn">
              Create Classroom
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChannelModal;