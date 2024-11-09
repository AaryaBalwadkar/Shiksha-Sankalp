import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const AppDescription = () => {
  return (
    <section style={{ backgroundColor: "#1E1E1E", padding: "60px 0", color: "white", marginTop: "60px", marginBottom: "60px" }}>
      <Container>
        <Row className="text-center text-md-left">
          <Col md={6} sm={12} className="d-flex flex-column justify-content-center">
            <h2 className="fs-1 fw-bold mb-4">Welcome to Shiksha Sankalp</h2>
            <p className="fs-5 mb-4">
              Shiksha Sankalp is a next-generation platform designed to empower users with seamless communication,
              collaboration, and creativity. Whether you're managing a community or building your own online presence, 
              Shiksha Sankalp helps you stay connected with your team, friends, and other users.
            </p>
            <p className="fs-5 mb-4">
              Explore a wide range of features, from real-time messaging to advanced collaboration tools. With 
              Shiksha Sankalp, your communication is more than just talking—it's a shared experience that grows with you.
            </p>
            <Button variant="info" className="fw-bold px-4 py-2" style={{ borderRadius: "20px" }}>
              Get Started
            </Button>
          </Col>

          <Col md={6} sm={12}>
            <img
              src="https://via.placeholder.com/500x300.png?text=webworld"
              alt="App Preview"
              style={{
                width: "100%",
                borderRadius: "15px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)"
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppDescription;
