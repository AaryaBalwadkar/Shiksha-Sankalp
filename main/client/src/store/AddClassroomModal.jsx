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

import React, { useState } from "react";
import "./AddClassroomModal.css";
import { Input } from "@/components/ui/input";
import { useClassroomAndChannelStore } from "./ClassroomStore";
// import FileUpload from '@/components/fileUpload/FileUpload.jsx'

const AddClassroomModal = () => {
  const [classroomName, setClassroomName] = useState();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null); // Track validation errors

  const { addClassroom } = useClassroomAndChannelStore()

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    validateFile(selectedFile);
  };

  // Handle file drag and drop
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    validateFile(droppedFile);
  };

  const handleDragOver = (event) => event.preventDefault();

  // Validate if the uploaded file is an image
  const validateFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      setError(null); // Clear any previous errors
      setFile(file);
      setPreview(URL.createObjectURL(file)); // Generate preview
    } else {
      setError('Only image files are allowed!');
      setFile(null);
      setPreview(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
			await addClassroom(classroomName);
      navigate("/email-verification")
		} catch (error) {
			console.log(error);
		}
  };

  return (
    <div>
      <div className="main">
        <div className="addClassroom">
          <div className="container">
            <div className="form-title">
              <span>Create Classroom</span>
            </div>

            <form className="form-box login-form" onSubmit={handleSubmit}>
              <div className="upload-container">
                  <div
                    className="dropzone"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*" // Allow only image files
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <label htmlFor="fileInput" className="upload-label">
                      {file ? file.name : "Drag & Drop or Click to Upload"}
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
                  className="inputs input-field"
                  placeholder="Classroom Name"
                  value={classroomName}
                  onChange={(e) => setClassroomName(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="inputs submit-btn">
                Create Classroom
              </button>
            </form>
            {/* <form className="form-box login-form">
              <div className="form-inputs">
                <div className="status-options">
                </div>
                <Select options={status_options} styles={customStyles} onChange={(option) => setStatus(option.value)}></Select>
                <div className="input-box">
                  <input type="text" className="inputs input-field" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="input-box">
                  <input type="email" className="inputs input-field" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-box">
                  <input type="password" className="inputs input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <div className="input-box">
                  <input type="password" className="inputs input-field" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required></input>
                </div>
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="input-box">
                <button type="submit" className="inputs submit-btn" onClick={handleSignUp}>Sign Up</button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClassroomModal;
