// import React, { useState } from "react";
// import Navb from "./Navb"; // Import the navbar component
// import { Card, Button } from "react-bootstrap"; // Import Card and Button components from React Bootstrap

// function FeedbackPage() {
//   const [rating, setRating] = useState(null); // State to store the selected rating

//   // Handle emoji click and set the rating
//   const handleEmojiClick = (value) => {
//     setRating(value);
//   };

//   return (
//     <div style={{ backgroundColor: "#1E1E1E" }}>
//       <Navb /> {/* Navbar component included here */}
//       <div className="container mt-5">
//         {/* Card with the same color as navbar */}
//         <Card bg="dark" text="white" className="mb-4">
//           <Card.Body>
//             <div className="wrapper">
//               <p className="text">Rate This App</p>
//               <div
//                 className="emoji"
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   gap: "20px",  // Space between emojis
//                   fontSize: "5vw",  // Make emoji size relative to the viewport width
//                   marginBottom: "30px",  // Space below emojis
//                 }}
//               >
//                 <div
//                   data-value="1"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => handleEmojiClick(1)}
//                 >
//                   {rating === 1 ? "😡" : "😡"}
//                 </div>
//                 <div
//                   data-value="2"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => handleEmojiClick(2)}
//                 >
//                   {rating === 2 ? "☹️" : "☹️"}
//                 </div>
//                 <div
//                   data-value="3"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => handleEmojiClick(3)}
//                 >
//                   {rating === 3 ? "😑" : "😑"}
//                 </div>
//                 <div
//                   data-value="4"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => handleEmojiClick(4)}
//                 >
//                   {rating === 4 ? "🙂" : "🙂"}
//                 </div>
//                 <div
//                   data-value="5"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => handleEmojiClick(5)}
//                 >
//                   {rating === 5 ? "😄" : "😄"}
//                 </div>
//               </div>
//             </div>

//             <input
//               type="text"
//               className="input"
//               placeholder="Name"
//               style={{
//                 marginBottom: "15px",
//                 width: "100%",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 border: "1px solid #ccc",
//                 backgroundColor: "#333",
//                 color: "white",
//                 fontSize: "16px",
//               }}
//             />
//             <input
//               type="text"
//               className="input"
//               placeholder="Contact"
//               style={{
//                 marginBottom: "15px",
//                 width: "100%",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 border: "1px solid #ccc",
//                 backgroundColor: "#333",
//                 color: "white",
//                 fontSize: "16px",
//               }}
//             />
//             <input
//               type="email"
//               className="input"
//               placeholder="Email ID"
//               style={{
//                 marginBottom: "15px",
//                 width: "100%",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 border: "1px solid #ccc",
//                 backgroundColor: "#333",
//                 color: "white",
//                 fontSize: "16px",
//               }}
//             />
//             <textarea
//               className="textarea"
//               cols="30"
//               rows="3"
//               placeholder="Write your opinion"
//               style={{
//                 marginBottom: "15px",
//                 width: "100%",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 border: "1px solid #ccc",
//                 backgroundColor: "#333",
//                 color: "white",
//                 fontSize: "16px",
//               }}
//             ></textarea>

//             <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
//               {/* Send Button */}
//               <Button
//                 href="#"
//                 variant="info"
//                 className="fw-bold px-4 py-2"
//                 style={{
//                   borderRadius: "20px",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 Send
//               </Button>

//               {/* Back to Home Link */}
//               <a
//                 href="/home"
//                 style={{
//                   color: "white",
//                   textDecoration: "none",
//                   display: "inline-block",
//                   marginTop: "20px",
//                   fontSize: "18px",
//                 }}
//               >
//                 Back to Home
//               </a>
//             </div>
//           </Card.Body>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default FeedbackPage;

import React, { useState } from "react";
import Navb from "./Navb"; // Import the navbar component
import { Card, Button } from "react-bootstrap"; // Import Card and Button components from React Bootstrap

function FeedbackPage() {
  const [rating, setRating] = useState(0); // State to store the selected rating
  const [name, setName] = useState(""); // State for name input
  const [contact, setContact] = useState(""); // State for contact input
  const [email, setEmail] = useState(""); // State for email input
  const [feedback, setFeedback] = useState(""); // State for feedback input
  const [submittedEssays, setSubmittedEssays] = useState([]); // State for storing submitted essays

  // Handle emoji click and set the rating
  const handleEmojiClick = (value) => {
    setRating(value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!feedback || rating === 0 || !name || !contact || !email) {
      alert("Please fill in all fields and select a rating.");
    } else {
      // Create a new essay item
      const newEssay = {
        name,
        email,
        essay: feedback,
        rating,
      };

      // Add to the submitted essays list
      setSubmittedEssays((prevEssays) => [...prevEssays, newEssay]);

      // Clear the form
      resetForm();

      alert("Feedback submitted successfully!");
    }
  };

  const resetForm = () => {
    setName("");
    setContact("");
    setEmail("");
    setFeedback("");
    setRating(0);
  };

  return (
    <div style={{ backgroundColor: "#1E1E1E" }}>
      <Navb /> {/* Navbar component included here */}
      <div className="container mt-5">
        {/* Card with the same color as navbar */}
        <Card bg="dark" text="white" className="mb-4">
          <Card.Body>
            <div className="wrapper">
              <p className="text">Rate This App</p>
              <div
                className="emoji"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",  // Space between emojis
                  fontSize: "5vw",  // Make emoji size relative to the viewport width
                  marginBottom: "30px",  // Space below emojis
                }}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <div
                    key={value}
                    data-value={value}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEmojiClick(value)}
                  >
                    {rating === value ? (
                      <span role="img" aria-label={`emoji-${value}`}>
                        {value === 1 ? "😡" : value === 2 ? "☹️" : value === 3 ? "😑" : value === 4 ? "🙂" : "😄"}
                      </span>
                    ) : (
                      <span role="img" aria-label={`emoji-${value}`}>
                        {value === 1 ? "😡" : value === 2 ? "☹️" : value === 3 ? "😑" : value === 4 ? "🙂" : "😄"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  marginBottom: "15px",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  backgroundColor: "#333",
                  color: "white",
                  fontSize: "16px",
                }}
              />
              <input
                type="text"
                className="input"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                style={{
                  marginBottom: "15px",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  backgroundColor: "#333",
                  color: "white",
                  fontSize: "16px",
                }}
              />
              <input
                type="email"
                className="input"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  marginBottom: "15px",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  backgroundColor: "#333",
                  color: "white",
                  fontSize: "16px",
                }}
              />
              <textarea
                className="textarea"
                cols="30"
                rows="3"
                placeholder="Write your opinion"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                style={{
                  marginBottom: "15px",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  backgroundColor: "#333",
                  color: "white",
                  fontSize: "16px",
                }}
              ></textarea>

              <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Button
                  type="submit"
                  variant="info"
                  className="fw-bold px-4 py-2"
                  style={{
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Send
                </Button>

                <a
                  href="/home"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    display: "inline-block",
                    marginTop: "20px",
                    fontSize: "18px",
                  }}
                >
                  Back to Home
                </a>
              </div>
            </form>

            {/* Display submitted feedback */}
            <div
              id="submittedEssays"
              style={{
                marginTop: "40px",
                backgroundColor: "#333", // Lightly colored background similar to navbar
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3
                style={{
                  color: "white",
                  marginBottom: "20px",
                  fontSize: "24px",
                  textAlign: "center",
                }}
              >
                Submitted Feedback
              </h3>
              <ul style={{ listStyleType: "none", padding: "0" }}>
                {submittedEssays.map((essay, index) => (
                  <li
                    key={index}
                    style={{
                      backgroundColor: "#444", // Slightly darker for each essay item
                      padding: "15px",
                      borderRadius: "8px",
                      marginBottom: "15px",
                      color: "white",
                    }}
                  >
                    <strong>{essay.name}</strong> ({essay.email}) <br />
                    <span style={{ color: "#b0b0b0" }}>Rating: {essay.rating}</span> <br />
                    {essay.essay}
                  </li>
                ))}
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default FeedbackPage;

