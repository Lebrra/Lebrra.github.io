import '../App.css';
import ex from './Games/sar.png';   // todo: pull these from conatiner instead (or even a json could be fun)
import { useState, useEffect, useRef } from 'react';
import { Image, Container, Col, Row, Modal } from 'react-bootstrap';
import { Animated } from 'react-native';

function Project(params) {
  const [show, setShow] = useState(false);
  const grow = useRef(new Animated.Value(100)).current;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  
  var alignLeft = (screenSize === "xs" || screenSize === "sm") ? "center" : "left";

  const pictures = params.Images;
  const cover = pictures.length > 0 ? pictures[0] : "none.png";

  return (
    <>
        <div onClick={handleShow} style={{cursor: "pointer"}}>
            <p className='project-block-title'>{params.Title}</p>
            <Image src={require(`./Games/${cover}`)} alt="temp" title={params.Title} style={{width: "100%"}}/>
        </div>

      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header className='project-modal' closeButton>
          <Modal.Title className='project-modal-header'>{params.Title}</Modal.Title><br />
          <Modal.Title>{params.Subtitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='project-modal'>
          <Container>
            <Row>
                <Col id={alignLeft} sm={12} md={6} lg={5}>
                    <p>
                      {params.Subtitle}
                    </p>
                    <p>
                      {params.Details}
                    </p>
                </Col>
                <Col id={alignLeft} sm={12} md={6} lg={7}>
                    {
                      pictures.map((c, i) => <Row style={{padding: "0%", marginTop: "4%"}} key={i} className='modal-images'>
                          <Image src={require(`./Games/${c}`)} alt={c} title={c} fluid style={{padding: "0%"}} />
                      </Row>)
                    }
                </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className='project-modal' />
      </Modal>
    </>
  );
}

export default Project;