// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

// export function Features() {
//   return (
//     <div style={{ backgroundColor: "#1E1E1E", padding: "60px 0" }}>
//       <Container>
//         <h2 className="text-center text-white mb-5">Features</h2>
//         <Row className="justify-content-center">
//           {/* Feature 1 */}
//           <Col md={4} className="mb-4">
//             <Card className="bg-dark text-white shadow-lg border-0">
//               <Card.Body>
//                 <Card.Title className="text-center fs-4">Real-time Communication</Card.Title>
//                 <Card.Text className="text-center">
//                   Stay connected with your team using real-time chat and voice channels.
//                 </Card.Text>
//                 <div className="text-center">
//                   <Button variant="outline-light" className="fw-bold">
//                     Learn More
//                   </Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* Feature 2 */}
//           <Col md={4} className="mb-4">
//             <Card className="bg-dark text-white shadow-lg border-0">
//               <Card.Body>
//                 <Card.Title className="text-center fs-4">Virtual Classrooms</Card.Title>
//                 <Card.Text className="text-center">
//                   Create virtual classrooms for your courses, with video and text discussions.
//                 </Card.Text>
//                 <div className="text-center">
//                   <Button variant="outline-light" className="fw-bold">
//                     Learn More
//                   </Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* Feature 3 */}
//           <Col md={4} className="mb-4">
//             <Card className="bg-dark text-white shadow-lg border-0">
//               <Card.Body>
//                 <Card.Title className="text-center fs-4">Task Management</Card.Title>
//                 <Card.Text className="text-center">
//                   Organize and manage tasks for your classroom or project with built-in tools.
//                 </Card.Text>
//                 <div className="text-center">
//                   <Button variant="outline-light" className="fw-bold">
//                     Learn More
//                   </Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Features;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export function Features() {
  return (
    <div style={{ padding: "60px 0" }}>
      <Container>
        <h2 className="text-center text-white mb-5">Our Features</h2>

        {/* Left-Oriented Feature */}
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <Card.Body>
              <Card.Title className="text-white fs-4 mb-3">Real-time Communication</Card.Title>
              <Card.Text className="text-white">
                Our platform offers seamless real-time communication for teams or classrooms. Whether you're discussing ideas in chat or having voice/video calls, the platform ensures your team stays connected without delays. Enjoy smooth, uninterrupted conversations as you collaborate on tasks and projects, with instant updates to keep you on track.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/350x200?text=Real-time+Communication"
              alt="Real-time Communication"
              style={{ borderRadius: "8px" }}
            />
          </Col>
        </Row>

        {/* Right-Oriented Feature */}
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/350x200?text=Virtual+Classrooms"
              alt="Virtual Classrooms"
              style={{ borderRadius: "8px" }}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="text-white fs-4 mb-3">Virtual Classrooms</Card.Title>
              <Card.Text className="text-white">
                Create virtual classrooms for interactive learning experiences. Our platform lets educators set up classrooms where students can collaborate in real-time, share notes, and engage in video sessions. Teachers can manage assignments, monitor student progress, and create a personalized learning environment, all within a single, easy-to-use interface.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>

        {/* Left-Oriented Feature */}
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <Card.Body>
              <Card.Title className="text-white fs-4 mb-3">Task Management</Card.Title>
              <Card.Text className="text-white">
                Manage tasks and projects with ease using our intuitive task management tools. Organize assignments, set deadlines, and track progress for your entire team or class. Our platform allows for task prioritization, detailed progress tracking, and instant reminders to ensure no task is left behind. Stay on top of everything with a streamlined, user-friendly interface.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/350x200?text=Task+Management"
              alt="Task Management"
              style={{ borderRadius: "8px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Features;

