import cat from './Games/none.png';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Outro() {
    const nav = useNavigate();
    const [jamHover, setJamHover] = useState(false);

  return <>
    <p style={{textAlign: "center"}}>Looking for more Games? Check out my <a onClick={() => nav('/GameJams')} onMouseEnter={() => setJamHover(true)} onMouseLeave={() => setJamHover(false)} style={{cursor: "pointer", color: jamHover ? "#e6d051" : "rgb(78, 201, 170)"}} title='Game Jams Page'>GameJams</a>!</p>
        <Image src={cat} style={{width: "300px", marginBottom: "100px", display: "flex", justifySelf: "center"}} />
    </>
}

export default Outro;
