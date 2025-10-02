import '../App.css';
import ex from './Games/sar.png';   // todo: pull these from conatiner instead (or even a json could be fun)
import { useState } from 'react';
import { Image, Button, Modal } from 'react-bootstrap';

function Example(params) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    // struct (params) needs: title, subtitle, date, pictures list, description, ?

  return (
    <>
        <div onClick={handleShow} style={{cursor: "pointer"}}>
            <Image src={ex} alt="temp" title="Open Game Modal" fluid/>
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;