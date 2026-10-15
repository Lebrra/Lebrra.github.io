import face from '../face_V2.png';
import { Container, Row, Col, Image } from "react-bootstrap";
import OutroJams from '../OutroJams';
import Links from '../Links';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Divider from '../Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function Header() {
  return <>
        <div className="hello">
            Demo - Brick Break
        </div>
        <div className="intro" id='intro'>
            <span className="text-emphasis">Brick Break</span> is a little game created for UW-Madison CS559 inspired by Vortex, the brick breaker from the iPod Nano!       
            <ul>
                <li><a id="jobLink" href="https://lebrra.itch.io/brick-break" target="_blank" rel="noreferrer">itch.io Link</a></li>
                <li><a id="jobLink" href="https://github.com/Lebrra/BrickBreak/tree/main" target="_blank" rel="noreferrer">GitHub Repo Link</a></li>
            </ul> 
        </div>
    </>
}

function Game() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/BrickDemo/brickbreak.loader.js",
        dataUrl: "/BrickDemo/brickbreak.data",
        frameworkUrl: "/BrickDemo/brickbreak.framework.js",
        codeUrl: "/BrickDemo/brickbreak.wasm",
    });

    return <Unity unityProvider={unityProvider}  style={{width: "100%", height: "100%"}}/>;
}

function BrickDemo(){
    return <>
    <Header/>
    <Divider />
    <div style={{width: 800, height: 800, justifyContent: 'center', display: 'flex', margin: 'auto'}}>
        <Game/>
    </div>
    <Divider />
    <OutroJams />
    <Links />
    </>
}

export default BrickDemo;