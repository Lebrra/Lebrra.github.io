import cat from './Games/none.png';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function OutroJams() {
  const nav = useNavigate();
  const [jamHover, setJamHover] = useState(false);

  return <>
    <p style={{textAlign: "center"}}>Thanks for checking out my games! <br /> [Back to <a onClick={() => nav('/')} onMouseEnter={() => setJamHover(true)} onMouseLeave={() => setJamHover(false)} style={{cursor: "pointer", color: jamHover ? "#e6d051" : "rgb(78, 201, 170)"}} title='Portfolio Home'>Portfolio</a>]</p>
        <Image src={cat} style={{width: "300px", marginBottom: "100px", display: "flex", justifySelf: "center"}} />
    </>
}

export default OutroJams;
