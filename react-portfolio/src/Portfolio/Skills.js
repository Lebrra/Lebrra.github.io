import { Container, Row, Col } from "react-bootstrap";
import '../App.css';
import { useState, useEffect } from "react";

function Skills() {
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

    var alignRight = (screenSize === "xs" || screenSize === "sm") ? "center" : "right";
    var squishCols = (screenSize === "xs" || screenSize === "sm" || screenSize === "md" || screenSize === "lg") ? "skills-col-squish" : "skills-col";
    var addMargin = (screenSize === "md" || screenSize === "lg") ? "30%" : "0%";

  return <Container>
        <Row>
            <Col className="header" id={alignRight} sm={12} md={3}>
                Skills
            </Col>

            <Col className={squishCols} sm={12} md={3} xl={1}>
                <Row className="skills-header" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                    Languages
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>C#</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>C++/C</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Python</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>JavaScript</Row>
            </Col>
            <Col className={squishCols} sm={12} md={3} xl={1}>
                <Row className="skills-header" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                    Engine/Programs
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Unity</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Visual Studio Code</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>JetBrains Rider</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Unreal Engine 4</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Adobe Suite</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Blender/Maya</Row>
            </Col>
            <Col className={squishCols} sm={12} md={3} xl={1} style={{marginLeft: addMargin}}>
                <Row className="skills-header" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                    Tools
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Git</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Jira</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>GitLab CI</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Jenkins</Row>
            </Col>
            <Col className={squishCols} sm={12} md={3} xl={1}>
                <Row className="skills-header" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                    Proficiencies
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>User Interface/Experience</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Gameplay</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Accessibility/WCAG</Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>Devops</Row>
            </Col>
        </Row>
    </Container>
}

export default Skills;
