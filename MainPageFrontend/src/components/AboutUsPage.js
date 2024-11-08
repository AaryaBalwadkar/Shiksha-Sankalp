import React from "react";
import Navb from "./Navb"; // Assuming you want to include the Navbar component
import { Card } from "react-bootstrap"; // Importing Bootstrap components

function AboutUsPage() {
  return (
    <div style={{ backgroundColor: "#1E1E1E", color: "white" }}>
      <Navb /> {/* Navbar component included here */}
      <div className="container mt-5">
        <Card bg="dark" text="white" className="mb-4">
          <Card.Body>
            <h1>About Us</h1>
            <p>
              Our company was founded in 2005. We have been committed to
              delivering the best services to our clients, ensuring innovation,
              quality, and reliability across all our projects. Our journey over
              the years has helped us grow into a trusted name in the industry,
              and we continue to strive for excellence in everything we do.
            </p>

            <p>
              Our vision is to create value and make a positive impact for our
              customers, employees, and the community. We aim to stay ahead of
              the curve by embracing new technologies and trends, while
              maintaining the high standards that we have become known for.
            </p>

            <p>
              We are passionate about what we do, and we believe that our
              success is directly tied to the satisfaction of our clients. Thank
              you for being a part of our story!
            </p>

            <a
              href="/home"
              style={{
                color: "white",
                textDecoration: "none",
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              Back to Home
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AboutUsPage;
