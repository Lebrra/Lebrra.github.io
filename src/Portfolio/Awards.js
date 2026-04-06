import { Container, Row, Col } from "react-bootstrap";
import '../App.css';
import { useState, useEffect } from "react";

function Awards() {
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
                Awards
            </Col>

            <Col className={squishCols}>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>
                    <a href="https://www.geeawards.com/" target='_blank'>GEE! Award</a> for <b>Best Formal Learning Game</b> with <a href="https://www.icivics.org/games/peoples-pie" target='_blank'>People’s Pie</a> (2023)</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>
                    <b>First Place</b> in IGDA Foundation Game Jam (2022) with <a href="https://lebrra.itch.io/crafted-chimera" target='_blank'>Crafted Chimera</a></p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>
                    Awarded <b>Best Student in MAGD</b> major at UW-Whitewater – <a href="https://www.facebook.com/UWWCommDept/videos/461378928388375?t=540" target='_blank'>Video Link</a> (2021)</p>
                  <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>
                    Awarded <b>Best in Show</b> at online MAGD Expo for <a href="https://wesmcw.itch.io/split" target='_blank'>Split</a> (2020) 
                    and <a href="https://lebrra.itch.io/end-of-the-party" target='_blank'>End of the Party</a> (2021)</p>
                    <div style={dividerStyle}/>
                </Row>
                <Row className="skills-text" style={{justifyContent: squishCols==="skills-col" ? "left" : "center"}}>
                  <p style={{textAlign: squishCols==="skills-col" ? "left" : "center", marginBottom: "0"}}>
                    Awarded <b>Runner-Up</b> at MAGD Expo for <a href="https://lebrra.itch.io/papersaurus" target='_blank'>Papersaurus</a> (2019)</p>
                </Row>
            </Col>
        </Row>
    </Container>
}

export default Awards;
