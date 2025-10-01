import { Container, Row, Col } from "react-bootstrap";
import '../App.css';
import { useState, useEffect } from "react";

function Skills() {
    // todo: there's totally a way to universalize this for all scripts
    const [screenSize, setScreenSize] = useState('');
    useEffect(() => {
      const handleResize = () => {
        // You can define your own breakpoints here
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

    var alignRight = (screenSize === "xs" || screenSize === "sm") ? "center" : "right";
    var squishCols = (screenSize === "xs" || screenSize === "sm" || screenSize === "md" || screenSize === "lg") ? "skills-col-squish" : "skills-col";
    var addMargin = (screenSize === "md" || screenSize === "lg") ? "30%" : "0%";

  return <Container>
        <Row>
            <Col className="header" id={alignRight} sm={12} md={3}>
                Skills
            </Col>

            <Col className={squishCols} sm={12} md={3} xl={1}>
                <Row className="skills-header">
                    Languages
                </Row>
                <Row className="skills-text">C#</Row>
                <Row className="skills-text">C++/C</Row>
                <Row className="skills-text">Python</Row>
                <Row className="skills-text">JavaScript</Row>
            </Col>
            <Col className={squishCols} sm={12} md={3} xl={1}>
                <Row className="skills-header">
                    Engine/Programs
                </Row>
                <Row className="skills-text">Unity</Row>
                <Row className="skills-text">Visual Studio Code</Row>
                <Row className="skills-text">JetBrains Rider</Row>
                <Row className="skills-text">Unreal Engine 4</Row>
                <Row className="skills-text">Adobe Suite</Row>
                <Row className="skills-text">Blender/Maya</Row>
            </Col>
            <Col className={squishCols} sm={12} md={3} xl={1} style={{marginLeft: addMargin}}>
                <Row className="skills-header">
                    Tools
                </Row>
                <Row className="skills-text">Git</Row>
                <Row className="skills-text">Jira</Row>
                <Row className="skills-text">GitLab CI</Row>
                <Row className="skills-text">Jenkins</Row>
            </Col>
            <Col className={squishCols} sm={12} md={3} xl={1}>
                <Row className="skills-header">
                    Proficiencies
                </Row>
                <Row className="skills-text">User Interface/Experience</Row>
                <Row className="skills-text">Gameplay</Row>
                <Row className="skills-text">Accessibility/WCAG</Row>
                <Row className="skills-text">Devops</Row>
            </Col>
        </Row>
    </Container>
}

export default Skills;
