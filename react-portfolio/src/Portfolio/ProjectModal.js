import '../App.css';
import { useState, useEffect, useRef } from 'react';
import { Image, Container, Col, Row, Modal } from 'react-bootstrap';

function Project(params) {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

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
  
  const oneRow = (screenSize === "xs" || screenSize === "sm" || screenSize === "md") ? true : false;

  const pictures = params.Images;
  const cover = pictures.length > 0 ? pictures[0] : "none.png";

  const blockHoverOff = {
    transition: "0.15s ease-in-out",
    boxShadow: "2px 0px 7px black, 2px 0px 40px black",
    cursor: "pointer"
  }
  const blockHoverOn = {
    transition: "0.15s ease-in-out",
    boxShadow: "2px 0px 7px black, 2px 0px 20px #e6d051",
    cursor: "pointer"
  }

  const dividerStyle = {
    marginTop: "14px", 
    marginBottom: "14px", 
    borderBottom: '5px dotted #383838ff', 
    width: '70px',
  };

  return (
    <>
        <div onClick={handleShow} style={hover ? blockHoverOn : blockHoverOff} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <p className='project-block-title'>{params.Title}</p>
            <Image src={require(`./Games/${cover}`)} alt="temp" title={params.Title} style={{width: "100%"}}/>
        </div>

      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header className='project-modal' closeButton>
          <Modal.Title className='project-modal-header'>{params.Title}</Modal.Title><br />
        </Modal.Header>
        <Modal.Body className='project-modal'>
          <Container>
            <Row>
                <Col sm={12} lg={5}>
                    <p className='project-subtitle'>
                      {params.Subtitle}
                    </p>
                    <div style={dividerStyle}/>
                    <p style={{marginRight: oneRow ? "auto" : "40px"}}>
                      {
                        params.Details.split("\n").map((c, i) => <p key={i} className='project-text'>{c}</p>)
                      }
                    </p>
                    <div style={dividerStyle}/>
                    <p className='project-header'>Dates:</p>
                    <ul>
                      <li>{params.Date}</li>
                    </ul>
                    <div style={dividerStyle}/>
                    <p className='project-header'>Platforms:</p>
                    <ul>
                      {
                        params.Platforms.map((c, i) => <li key={i}>{c}</li>)
                      }
                    </ul>
                    <div style={dividerStyle}/>
                    <p className='project-header'>Links:</p>
                    <ul>
                      {
                        params.Links.map((c, i) => <li key={i} ><a href={c.url} target='_blank' rel="noreferrer" title={c.Name}>{c.Name}</a></li>)
                      }
                    </ul>
                    {
                      oneRow ? 
                        <div style={dividerStyle}/> : <></>
                    }
                </Col>
                <Col sm={12} lg={7}>
                    {
                      pictures.map((c, i) => <Row style={{padding: "0%", marginTop: "4%"}} key={i} className='modal-images'>
                        {
                           c.substr(c.length - 3) === "mp4" ? 
                              <video controls src={require(`./Games/${c}`)} type="video/mp4" alt={c} title={c} fluid style={{padding: "0%"}} /> :
                              <Image src={require(`./Games/${c}`)} alt={c} title={c} fluid style={{padding: "0%"}} />
                        }
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