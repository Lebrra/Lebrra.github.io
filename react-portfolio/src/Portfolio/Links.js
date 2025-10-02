import email from './LinkIcons/mail.png';
import itch from './LinkIcons/itch.png';
import linkedin from './LinkIcons/linkedin.png';
import github from './LinkIcons/github.png';
import tweet from './LinkIcons/twitter.png';
import resume from './LinkIcons/resume.png';
import arrow from './LinkIcons/arrow.png';
import { Container, Row, Col, Image, Navbar } from "react-bootstrap";
import { Animated } from "react-native";
import '../App.css';
import { useState, useEffect, useRef } from "react";

function Links() {
    const [openNav, setOpenNav] = useState(false);
    const [screenSize, setScreenSize] = useState('');
    const rotateAnim = useRef(new Animated.Value(0)).current;

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

    useEffect(() => {
        Animated.timing(rotateAnim, {
            toValue: openNav ? 90 : 10,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, [openNav]);

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

    console.log(rotateAnim);

  return openNav ?  
        <div className="fixed-bottom">
            <Navbar>
                <Container style={{justifyContent: "flex-end"}}>
                <Row style={vertical ? expandVertical : expandHorizontal}>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="https://lebrra.github.io/" target='__blank' title="Home Page">
                        <Image src={email} className="link-img" alt='Leah Icon' fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="https://lebrra.github.io/" target='__blank' title="Home Page">
                        <Image src={itch} className="link-img" alt='Leah Icon' fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="https://lebrra.github.io/" target='__blank' title="Home Page">
                        <Image src={linkedin} className="link-img" alt='Leah Icon' fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="https://lebrra.github.io/" target='__blank' title="Home Page">
                        <Image src={github} className="link-img" alt='Leah Icon' fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="https://lebrra.github.io/" target='__blank' title="Home Page">
                        <Image src={tweet} className="link-img" alt='Leah Icon' fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <a href="https://lebrra.github.io/" target='__blank' title="Home Page">
                        <Image src={resume} className="link-img" alt='Leah Icon' fluid/>
                    </a>
                    </Col>
                    <Col xs={4} sm={2} lg={1}>
                    <Animated.View style={arrowState}>
                        <Image src={arrow} className="link-img" alt='Leah Icon' title={openNav ? "Close Links" : "Open Links"} fluid onClick={() => setOpenNav(!openNav)}/>
                    </Animated.View>
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
                    <Animated.View style={arrowState}>
                        <Image src={arrow} className="link-img" alt='Leah Icon' title={openNav ? "Close Links" : "Open Links"} fluid onClick={() => setOpenNav(!openNav)}/>
                    </Animated.View>
                    </Col>
                </Row>
                </Container>
            </Navbar>
        </div>
}

export default Links;
