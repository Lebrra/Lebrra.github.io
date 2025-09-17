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
            <Row className="align-items-center">
                <Col sm={12} md={5} lg={4}>
                <Image src={face} className="faceLink" href="https://lebrra.github.io/" title="Home Page" alt='Leah Icon' fluid/>
                </Col>
                <Col id='intro'>
                My name is <b>Leah Blasczyk</b>;<br />
                I am a Game Engineer with an emphasis in UI/UX and 
                a passion for board games, crafts, and video games!
                </Col>
            </Row>
            </Container>
            
        </div>
    </>
}

export default Intro;
