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

import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "./assets/webworldlogo.svg";

export function Navb() {
  return (
    <Navbar expand="lg" className="text-white py-3" bg="dark" variant="dark">
      <Container>
        {/* Logo */}
        <Navbar.Brand className="text-white d-flex align-items-center">
          <img
            src={logo}
            alt="Shiksha Sankalp Logo"
            style={{ width: "40px" }}
            className="me-2"
          />
          <span className="fs-4">Shiksha Sankalp</span>
        </Navbar.Brand>

        {/* Toggle for mobile, made white */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 text-white" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links centered */}
          <Nav
            className="ms-auto align-items-center w-100 justify-content-center d-lg-flex d-block"
            style={{ flexGrow: 1 }}
          >
            <Nav.Link className="text-white mx-2">Home</Nav.Link>
            <Nav.Link className="text-white mx-2">Features</Nav.Link>
            <Nav.Link className="text-white mx-2">About</Nav.Link>
          </Nav>

          {/* Action Buttons centered below the nav items on mobile */}
          <div className="d-block d-lg-none w-100 text-center mt-3">
            <Button
              variant="info"
              className="fw-bold px-4 py-2"
              style={{ borderRadius: "20px", whiteSpace: "nowrap" }}
            >
              Open Shiksha Sankalp
            </Button>
          </div>

          {/* Action Buttons on larger screens */}
          <div className="d-none d-lg-flex align-items-center ms-lg-3">
            <Button
              variant="info"
              className="fw-bold px-4 py-2"
              style={{ borderRadius: "20px", whiteSpace: "nowrap" }}
            >
              Open Shiksha Sankalp
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
