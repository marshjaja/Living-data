import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Container>
      <div
        className="copyright"
        style={{ color: '#F39F5A', fontFamily: 'Source Sans 3' }}
      >
        &copy; 2024. All Rights Reserved.
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.github.com">
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <Link to="contact-form">
              <i className="bi bi-envelope-at-fill"></i>
            </Link>
          </li>
        </ul>
      </div>
      {showTopBtn && <div className="go-top" onClick={goTop}></div>}
    </Container>
  );
}
export default Footer;
