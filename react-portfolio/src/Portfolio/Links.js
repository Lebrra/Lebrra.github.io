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
    const [animating, setAnimating] = useState(false);
    const [delayedOpenNav, setDelayedOpenNav] = useState(false);
    const [hoverID, setHoverID] = useState("none");

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

    function updateOpen(state){
        if (animating) return;

        setOpenNav(state);
        setAnimating(true);

        if (state){
            setDelayedOpenNav(true);
            setTimeout(() => {
                setAnimating(false);
            }, 300);
        }
        else {
            setTimeout(() => {
                setDelayedOpenNav(false);
                setAnimating(false);
            }, 300);
        }
    }

    var vertical = screenSize === 'xs' || screenSize === 'sm' || screenSize === 'md';

    // fun open animations
    const expandHorizontal = {
        justifyContent: "flex-end", 
        columnWidth: "auto", 
        width: "100%", 
        height: "100px",
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

    const arrowStateHor = {
        transition: "0.3s ease-in-out",
        rotate: `${openNav ? -90 : 0}deg`
    };
    const arrowStateVert = {
        transition: "0.3s ease-in-out",
        rotate: `${openNav ? 0 : 90}deg`
    };

    const iconGrowStateHor = {
        marginRight: `${openNav ? 0 : -8.5}%`,
        opacity: `${openNav ? 100 : 0}%`,
        transition: "margin-right 0.5s cubic-bezier(0.51,-0.23,0.54,1.26), opacity 0.5s ease-in-out"
    }
    const iconGrowStateVert = {
        marginBottom: `${openNav ? 0 : -15}%`,
        opacity: `${openNav ? 100 : 0}%`,
        transition: "margin-bottom 0.5s cubic-bezier(0.51,-0.23,0.54,1.26),  opacity 0.5s ease-in-out",
        minHeight: "100px"
    }

    function hoverState(id){
        if (id === hoverID){
            return vertical ? iconHoverVert : iconHoverHor;
        }
        else return iconHoverDefault;
    }

    const iconHoverVert = {
        transition: "0.15s ease-in-out",
        boxShadow: "2px 0px 7px black, 2px 0px 20px #e6d051"
    }
    const iconHoverHor = {
        transition: "0.15s ease-in-out",
        boxShadow: "2px 0px 7px black, 2px 0px 20px #e6d051"
    }
    const iconHoverDefault = {
        transition: "0.15s ease-in-out",
        boxShadow: "2px 0px 7px black, 2px 0px 40px black"
    }

    function ExpandedIcons(){
        return <>
            <Col xs={4} sm={2} lg={1} style={vertical ? iconGrowStateVert : iconGrowStateHor}>
            {
                delayedOpenNav ? 
                <a href="mailto:scout1665@gmail.com" title="Email Leah">
                    <Image src={email} className="link-img" alt='Email' fluid style={hoverState("email")} onMouseEnter={() => setHoverID("email")} onMouseLeave={() => setHoverID("none")}/>
                </a> : <></>
            }  
            </Col>
            <Col xs={4} sm={2} lg={1}  style={vertical ? iconGrowStateVert : iconGrowStateHor}>
            {
                delayedOpenNav ? 
                <a href="https://lebrra.itch.io/" target='_blank' rel="noreferrer" title="Leah's itch.io page">
                    <Image src={itch} className="link-img" alt="itch.io" fluid style={hoverState("itch")} onMouseEnter={() => setHoverID("itch")} onMouseLeave={() => setHoverID("none")}/>
                </a> : <></>
            }
            </Col>
            <Col xs={4} sm={2} lg={1}  style={vertical ? iconGrowStateVert : iconGrowStateHor}>
            {
                delayedOpenNav ? 
                <a href="https://www.linkedin.com/in/leah-blasczyk-0b25b3198/" target='_blank' rel="noreferrer" title="Leah on LinkedIn">
                    <Image src={linkedin} className="link-img" alt='LinkedIn' fluid style={hoverState("link")} onMouseEnter={() => setHoverID("link")} onMouseLeave={() => setHoverID("none")}/>
                </a> : <></>
            }
            </Col>
            <Col xs={4} sm={2} lg={1} style={vertical ? iconGrowStateVert : iconGrowStateHor}>
            {
                delayedOpenNav ? 
                <a href="https://github.com/Lebrra" target='_blank' rel="noreferrer" title="Leah's GitHub page">
                    <Image src={github} className="link-img" alt='GitHub' fluid style={hoverState("git")} onMouseEnter={() => setHoverID("git")} onMouseLeave={() => setHoverID("none")}/>
                </a> : <></>
            }
            </Col>
            <Col xs={4} sm={2} lg={1} style={vertical ? iconGrowStateVert : iconGrowStateHor}>
            {
                delayedOpenNav ? 
                <a href="https://twitter.com/lebrra_" target='_blank' rel="noreferrer" title="Leah on Twitter">
                    <Image src={tweet} className="link-img" alt='Twitter' fluid style={hoverState("twi")} onMouseEnter={() => setHoverID("twi")} onMouseLeave={() => setHoverID("none")}/>
                </a> : <></>
            }
            </Col>
            <Col xs={4} sm={2} lg={1} style={vertical ? iconGrowStateVert : iconGrowStateHor}>
            {
                delayedOpenNav ? 
                <a href="Resume/Blasczyk_Resume.pdf" download={"BLasczyk_Resume.pdf"} title="Download Resume">
                    <Image src={resume} className="link-img" alt='Resume' fluid style={hoverState("res")} onMouseEnter={() => setHoverID("res")} onMouseLeave={() => setHoverID("none")}/>
                </a> : <></>
            }
            </Col>
        </>
    }

  return <div className="fixed-bottom" style={{minHeight: "10%"}}>
            <Navbar fluid>
                <Container style={{justifyContent: "flex-end"}}>
                <Row style={vertical ? expandVertical : expandHorizontal}>
                    {ExpandedIcons()}
                    <Col xs={4} sm={2} lg={1}>
                        <div style={vertical ? arrowStateVert : arrowStateHor}>
                            <Image src={arrow} className="link-img" alt={openNav ? "Close Links" : "Open Links"} title={openNav ? "Close Links" : "Open Links"} fluid onClick={() => updateOpen(!openNav)} style={hoverState("arr")} onMouseEnter={() => setHoverID("arr")} onMouseLeave={() => setHoverID("none")}/>
                        </div>
                    </Col>
                </Row>
                </Container>
            </Navbar>
        </div>
}

export default Links;
