// import React from 'react';
// import { Link } from 'react-router-dom';

// function Contact() {
//   return (
//     <div>
//       <h1>Contact</h1>
//       <Link to="/contact-form">ContactForm</Link>
//       <Link to="/">Go back to Home</Link>
//     </div>
//   );
// }

// export default Contact;
//------------------------

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Logo from '../assets/images/logo.png';
// import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import ContactForm from './ContactForm'; // Import your ContactForm component

// function ContactPage() {
//   return (
//     <>
//       <Navbar variant="light">
//         <Container>
//           <Navbar.Brand as={Link} to="/" id="livingdata">
//             <img
//               src={Logo}
//               height="70"
//               className="d-inline-block align-top"
//               alt="Living Data Logo"
//             />
//           </Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/" style={{ color: '#F39F5A' }}>Home</Nav.Link>
//             <Nav.Link as={Link} to="/contact-us" style={{ color: '#F39F5A' }}>Contact Us</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       {/* Contact Form */}
//       <ContactForm />

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// }

// export default ContactPage;


//--------------

import React from 'react';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <NavBar />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;




