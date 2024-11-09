// import React from "react";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import logo from "./assets/Shiksha Sankalplogo.svg";


// export function Navb() {
//   return (
//     <Navbar expand="lg" className="text-white py-3" bg="dark">
//       <Container>
//         {/* Logo */}
//         <Navbar.Brand className="text-white d-flex align-items-center">
//           <img
//             src={logo}
//             alt="Discord Logo"
//             style={{ width: "40px" }}
//             className="me-2"
//           />
//           <span className="fs-4">Shiksha Sankalp</span>
//         </Navbar.Brand>

//         {/* Toggle for mobile */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

//         <Navbar.Collapse id="basic-navbar-nav">
//           {/* Links */}
//           <Nav className="ms-auto align-items-center">
//             <Nav.Link className="text-white mx-2">Home</Nav.Link>
//             <Nav.Link className="text-white mx-2">Features</Nav.Link>
//             <Nav.Link className="text-white mx-2">About</Nav.Link>
//           </Nav>

//           {/* Action Buttons */}
//           <div className="d-flex align-items-center ms-lg-3">
//             <Button
//               variant="info"
//               className="fw-bold px-4 py-2"
//               style={{ borderRadius: "20px" }}
//             >
//               Open Shiksha Sankalp
//             </Button>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navb;

//import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "./assets/webworldlogo.svg";

export function Navb() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#212529" }} className="text-white py-3">
      <Container>
        {/* Logo on the left */}
        <Navbar.Brand style={{ color: "#ffffff", fontSize: "1.5rem", display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Shiksha Sankalp Logo"
            style={{ width: "40px", marginRight: "10px" }}
          />
          <span>Shiksha Sankalp</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 text-white" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#" className="text-white mx-3" style={{ fontSize: "1rem" }}>Home</Nav.Link>
            <Nav.Link href="#" className="text-white mx-3" style={{ fontSize: "1rem" }}>Features</Nav.Link>
            <Nav.Link href="#" className="text-white mx-3" style={{ fontSize: "1rem" }}>About</Nav.Link>
          </Nav>

          {/* Action Button aligned to the far right */}
          <Button
            className="ms-3"
            style={{
              backgroundColor: "#0dcaf0",
              color: "#ffffff",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              whiteSpace: "nowrap",
              transition: "background-color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0a89a3"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#0dcaf0"}
          >
            Open Shiksha Sankalp
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
