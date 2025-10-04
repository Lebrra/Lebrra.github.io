import face from './faceCircle.png';
import { Container, Row, Col, Image } from "react-bootstrap";
import '../App.css';
import { useState } from 'react';

function Intro() {
    const [faceHover, setFaceHover] = useState(false);

    const hoverStyle = {
        transition: "0.15s ease-in-out",
        boxShadow: "2px 0px 7px black, 2px 0px 20px #e6d051"
    }
    const defStyle = {
        transition: "0.15s ease-in-out",
        boxShadow: "2px 0px 7px black, 0px 0px 40px black"
    }

  return <>
        <div className="hello">
            Hello!
        </div>
        <div className="intro">
            <Container>
            <Row className="align-items-center" style={{gap: "50px"}}>
                <Col sm={12} md={5} lg={3}>
                <a href="https://lebrra.github.io/" target='__blank' title="Home Page">
                    <Image src={face} className="faceLink" alt='Leah Icon' fluid style={faceHover ? hoverStyle : defStyle} onMouseEnter={() => setFaceHover(true)} onMouseLeave={() => setFaceHover(false)}/>
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
