// todo: pull these from conatiner instead (or even a json could be fun)
import Project from './ProjectModal';
import '../App.css';
import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import jamData from './Jams/jamData.json';


function Jams() {
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
    var percent = "0%";
    switch(screenSize){
      case "md":
        percent = "32%";
        break;
      case "lg":
        percent = "30%";
        break;
      case "xl":
        percent = "29%";
        break;
      case "xxl":
        percent = "28%";
        break;
    }

    // struct (params) needs: title, subtitle, date, pictures list, description, ?
    const data = jamData;

    function CreateGames(data, index){
      data.Folder = "Jams";
      return <Col className="project-block" sm={12} md={6} lg={3} key={data.id} style={
                      // if med then we need to align all but first
                      // else if large+ need to align every other after 1
                      // else none
                      screenSize === "md" && index > 0 ? 
                      {
                        marginLeft: `${percent}`,
                        padding: "0%",
                        marginBottom: screenSize === "xs" || screenSize === "sm" || screenSize === "md" ? "9%" : "4%"
                      } :
                      (screenSize === "lg" || screenSize === "xl" || screenSize === "xxl") && (index > 1 && index % 2 === 0) ?
                      {
                        marginLeft: `${percent}`,
                        padding: "0%", 
                        marginBottom: screenSize === "xs" || screenSize === "sm" || screenSize === "md" ? "9%" : "4%"
                      } : {padding: "0%", marginBottom: screenSize === "xs" || screenSize === "sm" || screenSize === "md" ? "9%" : "4%"}
                    }>
                    <Project fluid {...data} />
                </Col>
    }

  return <Container>
        <Row>
            <Col className="header" id={alignRight} sm={12} md={3}>
                Game Jams
            </Col>
            {
                data.map(CreateGames)
            }
        </Row>
    </Container>
}

export default Jams;