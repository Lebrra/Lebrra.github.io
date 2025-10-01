import face from './faceCircle.png';
import { Container, Row, Col, Image } from "react-bootstrap";
import '../App.css';

function Intro() {
  return <>
        <div className="hello">
            Hello!
        </div>
        <div className="intro">
            <Container>
            <Row className="align-items-center" style={{gap: "50px"}}>
                <Col sm={12} md={5} lg={3}>
                <a href="https://lebrra.github.io/" target='__blank' title="Home Page">
                    <Image src={face} className="faceLink" alt='Leah Icon' fluid/>
                </a>
                </Col>
                <Col id='intro'>
                My name is <span className="text-emphasis">Leah Blasczyk</span>;<br />
                I am a Game Engineer with an emphasis in UI/UX and 
                a passion for board games, crafts, and video games!
                </Col>
            </Row>
            </Container>
            
        </div>
    </>
}

export default Intro;
