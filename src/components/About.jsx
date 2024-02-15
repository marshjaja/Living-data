import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import aboutImg from '../assets/images/aboutPhoto2.jpg';
function About() {
    return (
        <section id="about" className='"block about-block'>
        <Container fluid>
            <div className='"title-holder'>
                <h2 style={{color:"#F39F5A", fontFamily:"Quicksand",
  fontWeight:"400"}}>About Us</h2>
                <div style={{color:"#F39F5A", fontFamily:"Source Sans 3",
  fontWeight:"200", marginBottom:"1em"}} className='subtitle'>Learn More about us</div>
            </div>
        <Row>
          <Col sm={6} className='about-image'>
          <Image src={aboutImg} width={300} height={250} />
          </Col>
          <Col sm={6} style={{alignSelf:'center'}}>
          <p> Introducing Living Data, a revolutionary platform created to redefine the way people discover rental properties in their preferred locations; seamlessly integrating comprehensive local crime rate information.</p>
          </Col>
        </Row>
      </Container>
      </section>
    )
}

export default About
