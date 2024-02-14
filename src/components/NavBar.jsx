// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function NavBar() {
//   return (
//     <>
//       <Navbar bg="light" data-bs-theme="light">
//         <Container>
//           <Navbar.Brand href="#livingData">Living Data</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#contact-us">Contact Us</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/LivingDataLogo.jpg';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar variant="light">
        <Container>
          {/* display the logo */}
          <Navbar.Brand as={Link} to="/" id="livingdata">
            <img
              src={Logo}
              height="70"
              className="d-inline-block align-top"
              alt="Living Data Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: '#F39F5A' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" style={{ color: '#F39F5A' }}>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;


