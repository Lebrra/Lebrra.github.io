import cat from './Games/none.png';
import { Image } from 'react-bootstrap';

function Outro() {

  return <>
        <Image src={cat} style={{width: "300px", marginBottom: "100px", display: "flex", justifySelf: "center"}} />
    </>
}

export default Outro;
