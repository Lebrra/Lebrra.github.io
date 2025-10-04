import face from './faceCircle.png';
import { Container, Row, Col, Image } from "react-bootstrap";
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function IntroJams() {
    const nav = useNavigate();
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
            Game Jams!
        </div>
        <div className="intro">
            <Container>
            <Row className="align-items-center" style={{gap: "50px"}}>
                <Col sm={12} md={5} lg={3}>
                <a onClick={() => nav("/")} title="Home Page">
                    <Image src={face} className="faceLink" alt='Leah Icon' fluid style={faceHover ? hoverStyle : defStyle} onMouseEnter={() => setFaceHover(true)} onMouseLeave={() => setFaceHover(false)}/>
                </a>
                </Col>
                <Col id='intro'>
                I love challenging myself in game jams - timed events to make games from scratch!<br style={{marginBottom: "100px"}} />
                This is a list of every game jam I have been a part of including the date, time, theme, and links:
                </Col>
            </Row>
            </Container>
            
        </div>
    </>
}

export default IntroJams;
