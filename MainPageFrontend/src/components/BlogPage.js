import React, { useState } from "react";
import Navb from "./Navb"; // Assuming you want to include the Navbar component
import { Card, Button, Form } from "react-bootstrap"; // Importing Bootstrap components

function BlogPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [essay, setEssay] = useState("");
  const [essays, setEssays] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new essay to the essays list
    setEssays([...essays, { name, email, essay }]);
    // Clear the form
    setName("");
    setEmail("");
    setEssay("");
  };

  return (
    <div style={{ backgroundColor: "#1E1E1E", color: "white" }}>
      <Navb /> {/* Navbar component included here */}
      <div className="container mt-5">
        <Card bg="dark" text="white" className="mb-4">
          <Card.Body>
            <h1>BLOG</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
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
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Your Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
              </Form.Group>

              <Form.Group className="mb-3" controlId="essay">
                <Form.Label>Your Essay:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                  required
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
              </Form.Group>

              <Button variant="info" type="submit" className="fw-bold px-4 py-2">
                Submit
              </Button>
            </Form>

            <div id="submittedEssays" className="mt-5">
              <h2>Submitted Essays</h2>
              <ul>
                {essays.map((essay, index) => (
                  <li key={index}>
                    <strong>{essay.name}</strong> ({essay.email}):<br />
                    <p>{essay.essay}</p>
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

export default BlogPage;
