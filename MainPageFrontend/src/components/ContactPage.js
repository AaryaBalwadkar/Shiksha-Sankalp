import React from "react";
import Navb from "./Navb"; // Import the navbar component
import { Card } from "react-bootstrap"; // Import Card component from React Bootstrap

function ContactPage() {
  return (
    <div style={{ backgroundColor: "#1E1E1E" }}>
      <Navb />
      <div className="container mt-5">
        {/* Card with the same color as navbar */}
        <Card bg="dark" text="white" className="mb-4">
          <Card.Body>
            <h1>Contact Us</h1>
            <p>
              If you have any questions or need further information, please
              contact us using the form below or through our contact details.
            </p>

            <h2>Contact Details</h2>
            <ul>
              <li>
                <strong>Email:</strong> support@yourcompany.com
              </li>
              <li>
                <strong>Phone:</strong> +1 (234) 567-8901
              </li>
              <li>
                <strong>Address:</strong> 123 Your Company St, City, Country,
                ZIP
              </li>
            </ul>
          </Card.Body>
        </Card>
        {/* Back to Home Link */}
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
      </div>
    </div>
  );
}

export default ContactPage;
