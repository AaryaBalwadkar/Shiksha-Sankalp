// import React from 'react'
// import * as z from "zod"
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm } from 'react-hook-form'

// import { Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle
// } from '@/components/ui/dialog'

// import { Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage
//  } from '@/components/ui/form'

//  import { Input } from '@/components/ui/input'
//  import { Button } from '@/components/ui/button'

// const formSchema = z.object({
//     name: z.string().min(1, {
//         message: "Classroom is required."
//     }),
//     imageUrl: z.string().min(1, {
//         message: "Classroom image is required."
//     })
// })

// const AddClassroomModal = () => {
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//         classroomName: "",
//         imageUrl: "",
//     }
//   })

//   const isLoading = form.formState.isSubmitting

//   const onSubmit = async ()
//   return (
//     <Dialog open>
//         <DialogContent className="bg-white text-black p-0 overflow-hidden">
//             <DialogHeader className="pt-8 px-6">
//                 <DialogTitle className="text-2xl text-center font-bold">
//                     Create Your Classroom
//                 </DialogTitle>
//                 <DialogDescription className="text-center text-zinc-500">
//                     Give name and image for your new classroom. You can always change it later.
//                 </DialogDescription>
//             </DialogHeader>
//             <Form>
//                 <form className='space-y-8'>
//                     <div className="space-y-8 px-6">
//                         <div className='flex items-center justify-center text-center'>
//                             TODO: Image Upload
//                         </div>
//                         {/* <FormField>
//                             <FormItem>
//                                 <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
//                                     Classroom
//                                 </FormLabel>
//                                 <FormControl>
//                                     <Input
//                                         disabled={isLoading}
//                                         className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
//                                         placeholder="Enter Classroom name"
//                                     />
//                                 </FormControl>
//                             </FormItem>
//                         </FormField> */}
//                     </div>
//                 </form>
//             </Form>
//         </DialogContent>
//     </Dialog>
//   )
// }

// export default AddClassroomModal

// import React, { useState } from "react";
// import "./AddClassroomModal.css";
// import { useClassroomAndChannelStore } from "./ClassroomStore";
// import { useNavigate } from "react-router-dom";

// const AddClassroomModal = () => {
//   const [classroomName, setClassroomName] = useState();
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [error, setError] = useState(null); // Track validation errors

//   const { addClassroom } = useClassroomAndChannelStore();
//   const navigate = useNavigate()

//   // Handle file selection
//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     validateFile(selectedFile);
//   };

//   // Handle file drag and drop
//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files[0];
//     validateFile(droppedFile);
//   };

//   const handleDragOver = (event) => event.preventDefault();

//   // Validate if the uploaded file is an image
//   const validateFile = (file) => {
//     if (file && file.type.startsWith("image/")) {
//       setError(null); // Clear any previous errors
//       setFile(file);
//       setPreview(URL.createObjectURL(file)); // Generate preview
//     } else {
//       setError("Only image files are allowed!");
//       setFile(null);
//       setPreview(null);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await addClassroom(classroomName, file)
//       navigate('/home')
//     } catch (error) {
//       console.log("Something went wrong: ", error.message);
//     }
//   };

//   return (
//     <div>
//       <div className="main">
//         <div className="addClassroom">
//           <div className="container">
//             <div className="title">Create Classroom</div>

//             <form className="form-box login-form" onSubmit={handleSubmit}>
//               <div className="upload-container">
//                 <div
//                   className="dropzone"
//                   onDrop={handleDrop}
//                   onDragOver={handleDragOver}
//                 >
//                   <input
//                     type="file"
//                     id="fileInput"
//                     accept="image/*" // Allow only image files
//                     onChange={handleFileChange}
//                     style={{ display: "none" }}
//                   />
//                   <label htmlFor="fileInput" className="upload-label">
//                     {file ? file.name : "Drag & Drop or Click to Upload"}
//                   </label>
//                 </div>

//                 {error && <p className="error-message">{error}</p>}

//                 {preview && (
//                   <div className="preview">
//                     <img src={preview} alt="Preview" />
//                   </div>
//                 )}
//               </div>
//               <div className="input-box">
//                 <input
//                   text="text"
//                   className="field"
//                   placeholder="Classroom Name"
//                   value={classroomName}
//                   onChange={(e) => setClassroomName(e.target.value)}>
//                 </input>
//               </div>
//               <button type="submit" className="inputs submit-btn">
//                 Create Classroom
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddClassroomModal;

// import React, { useState } from "react";
// import axios from "axios"; // Add Axios for API calls
// import "./AddClassroomModal.css";
// import { useClassroomAndChannelStore } from "./ClassroomStore";
// import { useNavigate } from "react-router-dom";

// const AddClassroomModal = () => {
//   const [classroomName, setClassroomName] = useState("");
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [error, setError] = useState(null); 

//   const { addClassroom } = useClassroomAndChannelStore();
//   const navigate = useNavigate();

//   // Handle file change and preview generation
//   const handleFileChange = async (event) => {
//     const selectedFile = event.target.files[0];
//     if (validateFile(selectedFile)) {
//       const base64 = await convertToBase64(selectedFile);
//       setFile(base64);
//       setPreview(URL.createObjectURL(selectedFile)); // Preview for UI
//     }
//   };

//   // File validation
//   const validateFile = (file) => {
//     if (file && file.type.startsWith("image/")) {
//       setError(null);
//       return true;
//     } else {
//       setError("Only image files are allowed!");
//       return false;
//     }
//   };

//   // Convert file to Base64 string
//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Send data to backend
//       await axios.post("/api/classrooms", { classroomName, image: file });
//       navigate("/home");
//     } catch (error) {
//       console.log("Something went wrong: ", error.message);
//     }
//   };

//   return (
//     <div className="main">
//       <div className="addClassroom">
//         <div className="container">
//           <div className="title">Create Classroom</div>
//           <form className="form-box login-form" onSubmit={handleSubmit}>
//             <div className="upload-container">
//               <div className="dropzone">
//                 <input
//                   type="file"
//                   id="fileInput"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   style={{ display: "none" }}
//                 />
//                 <label htmlFor="fileInput" className="upload-label">
//                   {file ? "Image Selected" : "Drag & Drop or Click to Upload"}
//                 </label>
//               </div>
//               {error && <p className="error-message">{error}</p>}
//               {preview && (
//                 <div className="preview">
//                   <img src={preview} alt="Preview" />
//                 </div>
//               )}
//             </div>
//             <div className="input-box">
//               <input
//                 type="text"
//                 className="field"
//                 placeholder="Classroom Name"
//                 value={classroomName}
//                 onChange={(e) => setClassroomName(e.target.value)}
//               />
//             </div>
//             <button type="submit" className="inputs submit-btn">
//               Create Classroom
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddClassroomModal;

import React, { useState } from "react";
import axios from "axios"; // Add Axios for API calls
import "./AddClassroomModal.css";
import { useClassroomAndChannelStore } from "./ClassroomStore.js";
import { useNavigate } from "react-router-dom";

const AddClassroomModal = () => {
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
          <div className="title">Create Classroom</div>
          <form className="form-box login-form" onSubmit={handleSubmit}>
            <div className="upload-container">
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
            </div>
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

export default AddClassroomModal;