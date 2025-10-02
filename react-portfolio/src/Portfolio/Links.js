import email from './LinkIcons/mail.png';
import itch from './LinkIcons/itch.png';
import linkedin from './LinkIcons/linkedin.png';
import github from './LinkIcons/github.png';
import tweet from './LinkIcons/twitter.png';
import resume from './LinkIcons/resume.png';
import arrow from './LinkIcons/arrow.png';
import { Container, Row, Col, Image, Navbar } from "react-bootstrap";
import '../App.css';
import { useState, useEffect } from "react";

function Links() {
    const [openNav, setOpenNav] = useState(false);
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

    var vertical = screenSize === 'xs' || screenSize === 'sm' || screenSize === 'md';

    // fun open animations
    const expandHorizontal = {
        justifyContent: "flex-end", 
        columnWidth: "auto", 
        width: "100%", 
        marginBottom: "1%", 
        flexDirection: 'row', 
        gap: "0px"
    };
    const expandVertical = {
        justifyContent: "flex-end", 
        columnWidth: "auto", 
        width: "100%", 
        marginBottom: "1%", 
        flexDirection: 'column', 
        gap: "15px"
    };
    const arrowState = {
        rotate: `${openNav ? -90 : 0}deg`
    };

  return openNav ?  
        <div className="fixed-bottom">
            <Navbar>
                <Container style={{justifyContent: "flex-end"}}>
                <Row style={vertical ? expandVertical : expandHorizontal}>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="mailto:scout1665@gmail.com" title="Email Leah">
                        <Image src={email} className="link-img" alt='Email' fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="https://lebrra.itch.io/" target='_blank' rel="noreferrer" title="Leah's itch.io page">
                        <Image src={itch} className="link-img" alt="itch.io" fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="https://www.linkedin.com/in/leah-blasczyk-0b25b3198/" target='_blank' rel="noreferrer" title="Leah on LinkedIn">
                        <Image src={linkedin} className="link-img" alt='LinkedIn' fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="https://github.com/Lebrra" target='_blank' rel="noreferrer" title="Leah's GitHub page">
                        <Image src={github} className="link-img" alt='GitHub' fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="https://twitter.com/lebrra_" target='_blank' rel="noreferrer" title="Leah on Twitter">
                        <Image src={tweet} className="link-img" alt='Twitter' fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="Resume/Blasczyk_Resume.pdf" download={"BLasczyk_Resume.pdf"} title="Download Resume">
                        <Image src={resume} className="link-img" alt='Resume' fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <div style={arrowState}>
                        <Image src={arrow} className="link-img" alt={openNav ? "Close Links" : "Open Links"} title={openNav ? "Close Links" : "Open Links"} fluid onClick={() => setOpenNav(!openNav)}/>
                    </div>
                    </Col>
                </Row>
                </Container>
            </Navbar>
        </div>
        :
        <div className="fixed-bottom">
            <Navbar>
                <Container style={{justifyContent: "flex-end"}}>
                <Row style={vertical ? expandVertical : expandHorizontal}>
                    <Col xs={4} sm={2} lg={1}>
                    <div style={arrowState}>
                        <Image src={arrow} className="link-img" alt={openNav ? "Close Links" : "Open Links"} title={openNav ? "Close Links" : "Open Links"} fluid onClick={() => setOpenNav(!openNav)}/>
                    </div>
                    </Col>
                </Row>
                </Container>
            </Navbar>
        </div>
}

export default Links;
