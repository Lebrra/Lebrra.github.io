import { Container, Row, Col } from "react-bootstrap";
import '../App.css';
import { useState, useEffect } from "react";

function About() {
    // todo: there's totally a way to universalize this for all scripts
    const [screenSize, setScreenSize] = useState('');
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 576) {
          setScreenSize('xs');
        } else if (window.innerWidth < 768) {
          setScreenSize('sm');
        } else if (window.innerWidth < 992) {
          setScreenSize('md');
        } else if (window.innerWidth < 1200) {
          setScreenSize('lg');
        } else {                    // xl is < 1400 else xxl
          setScreenSize('xl');
        }
      };
      // Set initial size
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    var align = (screenSize === "xs" || screenSize === "sm") ? "center" : "right";

  return <Container>
        <Row>
            <Col className="header" id={align} sm={12} md={3}>
                About Me
            </Col>
            <Col className="about-text">
                <p>
                    I finished up my final semester at <strong className="ww">University of Wisconsin - Whitewater</strong> in 2021
                    <br />where I graduated with a Bachelor of Science triple-majoring in:
                    <br />&emsp;&emsp;-<strong className="tall"> Media Arts and Game Development: Communication/Gaming</strong>
                    <br />&emsp;&emsp;-<strong className="tall"> Mathematics: Pure Mathematics</strong>
                    <br />&emsp;&emsp;-<strong className="tall"> Computer Science</strong>
                    <br />I am proud to have been on the Dean's list every semester and to have graduated with a 3.9 GPA overall and within each major.
                </p>
                <p>
                    During my time in college, I strove to gain as much experience as I was able. From interships, to study abroad (gone remote) projects, to numerous game jams,
                    I loved pushing my self to be a part of something great. I love video games, and I have always wanted to be the one behind a game that brings someone joy.
                </p>
                <p>
                    I am currently a <strong>Game Engineer</strong> at <strong><a id="jobLink" href="https://www.filamentgames.com/" target="_blank" rel="noreferrer">Filament Games</a></strong>! 
                    We make 'Games for Good' that help children, students, patients, and people better their lives through games.
                </p>
                <p>
                    To continue learning in the world of software development, I began my Master's Degree in Computer Science 
                    at the <strong className="mad">University of Wisconsin - Madison</strong> in the fall of 2023 and plan to graduate in Fall 2025. 

                </p>
            </Col>
        </Row>
    </Container>
}

export default About;
