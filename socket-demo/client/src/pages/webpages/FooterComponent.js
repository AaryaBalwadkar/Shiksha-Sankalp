// import React from 'react';
// import './styles.css'; // Import your original CSS file

// function FooterComponent() {

//   // Function to scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div>
//       {/* Footer Section */}
//       <footer className="footer">
//         <div className="container">
//           <div className="row">
//             <div className="footer-col">
//               <h4>Company</h4>
//               <ul>
//                 <li><a href="aboutus.html">About Us</a></li>
//                 <li><a href="privacy.html">Privacy Policy</a></li>
//                 <li><a href="contact.html">Contact Details</a></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>Help</h4>
//               <ul>
//                 <li><a href="#">Guidelines</a></li>
//                 <li><a href="#">Demo</a></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>Literature</h4>
//               <ul>
//                 <li><a href="blog.html">Blog</a></li>
//                 <li><a href="feedback.html">Feedback</a></li>
//                 <li><a href="#">Announcement</a></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>Updates</h4>
//               <ul>
//                 <li><a href="#">Features</a></li>
//                 <li><a href="#">New Updates</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <p>&copy; 2024 Your Company Name. All rights reserved.</p>

//         {/* Back to top button */}
//         <div className="back-to-top" onClick={scrollToTop}>Back to Top</div>
//       </footer>
//     </div>
//   );
// }

// export default FooterComponent;
import React from 'react';
import './styles.css'

function FooterComponent() {

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4 className="footer-header">Company</h4>
              <ul>
                <li><a href="aboutus.html" className="footer-link">About Us</a></li>
                <li><a href="privacy.html" className="footer-link">Privacy Policy</a></li>
                <li><a href="contact.html" className="footer-link">Contact Details</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-header">Help</h4>
              <ul>
                <li><a href="#" className="footer-link">Guidelines</a></li>
                <li><a href="#" className="footer-link">Demo</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-header">Literature</h4>
              <ul>
                <li><a href="blog.html" className="footer-link">Blog</a></li>
                <li><a href="feedback.html" className="footer-link">Feedback</a></li>
                <li><a href="#" className="footer-link">Announcement</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-header">Updates</h4>
              <ul>
                <li><a href="#" className="footer-link">Features</a></li>
                <li><a href="#" className="footer-link">New Updates</a></li>
              </ul>
            </div>
          </div>
        </div>

        <p className="footer-copy">&copy; 2024 Your Company Name. All rights reserved.</p>

        {/* Back to top button */}
        <div className="back-to-top" onClick={scrollToTop}>Back to Top</div>
      </footer>
    </div>
  );
}

export default FooterComponent;
