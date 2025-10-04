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

    const dividerStyle = {
      marginTop: "4px", 
      marginBottom: "5px", 
      borderBottom: '5px dotted #383838ff', 
      width: '70px',
      marginLeft: squishCols==="skills-col" ? "15px" : "0"
    };

  return <Container>
        <Row>
            <Col className="header" id={alignRight} sm={12} md={3}>
                Skills
            </Col>

            <Col className={squishCols} sm={12} md={3} xl={1}>
                <Row className="skills-header" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                    Languages
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>C#</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>C++/C</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Python</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>JavaScript</p>
                </Row>
            </Col>
            <Col className={squishCols} sm={12} md={3} xl={1}>
                <Row className="skills-header" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                    Engine/Programs
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Unity</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Visual Studio Code</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>JetBrains Rider</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Unreal Engine 4</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Adobe Suite</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Blender/Maya</p>
                </Row>
            </Col>
            <Col className={squishCols} sm={12} md={3} xl={1} style={{marginLeft: addMargin}}>
                <Row className="skills-header" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                    Tools
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Git</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Jira</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>GirLab CI</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Jenkins</p>
                </Row>
            </Col>
            <Col className={squishCols} sm={12} md={3} xl={1}>
                <Row className="skills-header" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                    Proficiencies
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center", textAlign: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>User Interface/Experience</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Gameplay</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Accessibility/WCAG</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>Devops</p>
                </Row>
            </Col>
        </Row>
    </Container>
}

export default Skills;
