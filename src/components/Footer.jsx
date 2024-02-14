// import {useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';

// function Footer(){
//     const [showTopBtn, setShowTopBtn] = useState(false);

//     useEffect(() => {
//         window.addEventListener('scroll', () =>{
//             if(window.scrollY > 400) {
//                 setShowTopBtn(true);
//             }else {
//                 setShowTopBtn(false);
//             }
//         })
//     }, [])

//     function goTop() {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         })
//     }

//     return (
//         <Container>
//             <div className='copyright'style={{color:"#F39F5A", fontFamily:"Source Sans 3"}}>&copy; 2024. All Rights Reserved.</div>
//             <div className='socials'>
//                 <ul>
//                     <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
//                     <li><a href="https://www.github.com"><i className="bi bi-github"></i></a></li>
//                     <li><a href="https://www.linkedin.com"><i className="bi bi-linkedin"></i></a></li>
//                     <li><a href="#contact"><i className="bi bi-envelope-at-fill"></i></a></li>
//                 </ul>
//             </div>
//             {
//                 showTopBtn && (<div className='go-top' onClick={goTop}></div>)
//             }
//         </Container>
//     )
// }
// export default Footer


//----------------------------------^ original
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        })
    }, [])

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Container>
            <div className='copyright' style={{ color: "#F39F5A", fontFamily: "Source Sans 3" }}>&copy; 2024. All Rights Reserved.</div>
            <div className='socials'>
                <ul>
                    {/* Add style to change the color to green */}
                    <li><a href="https://www.facebook.com" style={{ color: "#F39F5A" }}><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.github.com" style={{ color: "#F39F5A" }}><i className="bi bi-github"></i></a></li>
                    <li><a href="https://www.linkedin.com" style={{ color: "#F39F5A" }}><i className="bi bi-linkedin"></i></a></li>
                    <li><a href="#contact" style={{ color: "#F39F5A" }}><i className="bi bi-envelope-at-fill"></i></a></li>
                </ul>
            </div>
            {
                showTopBtn && (<div className='go-top' onClick={goTop}></div>)
            }
        </Container>
    )
}

export default Footer;




