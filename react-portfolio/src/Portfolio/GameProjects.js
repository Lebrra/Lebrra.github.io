// todo: pull these from conatiner instead (or even a json could be fun)
import Project from './ProjectModal';
import '../App.css';
import { useState, useEffect } from "react";
import { Image, Container, Row, Col } from 'react-bootstrap';


function Games(params) {
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

    // struct (params) needs: title, subtitle, date, pictures list, description, ?

  return <Container>
        <Row>
            <Col className="header" id={alignRight} sm={12} md={3}>
                Game Projects
            </Col>
            <Col className="project-block" sm={12} md={8} lg={4}>
                <Project fluid />
            </Col>
            <Col className="project-block" sm={12} md={8} lg={4}>
                <Project fluid />
            </Col>
            <Col className="project-block" sm={12} md={8} lg={4}>
                <Project fluid />
            </Col>
        </Row>
    </Container>
}

export default Games;