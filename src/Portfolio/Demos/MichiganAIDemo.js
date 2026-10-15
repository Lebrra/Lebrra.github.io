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
            Demo - Michigan AI Snapshot
        </div>
        <div className="intro" id='intro'>
            <span className="text-emphasis">Michigan</span> is my family's favorite card game that I have worked on digitally for several years! This snapshot showcases my latest work of custom game AI that players would be up against and limit tests the complicated choices they make.       
            <ul>
                <li><a id="jobLink" href="https://docs.google.com/document/d/1hxhRMJ8DZuVupBb7lUnX9keg15R6joyLKB0o1mP54mI/edit?usp=sharing" target="_blank" rel="noreferrer">Game rules (Google Doc)</a></li>
                <li><a id="jobLink" href="https://github.com/Lebrra/Michigan_AI-snapshot" target="_blank" rel="noreferrer">GitHub Repo Link</a></li>
            </ul> 
        </div>
    </>
}

function Game() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/MichiganAIDemo/AIsnapshot.loader.js",
        dataUrl: "/MichiganAIDemo/AIsnapshot.data",
        frameworkUrl: "/MichiganAIDemo/AIsnapshot.framework.js",
        codeUrl: "/MichiganAIDemo/AIsnapshot.wasm",
    });

    return <Unity unityProvider={unityProvider}  style={{width: "100%", height: "100%"}}/>;
}

function MichiganAIDemo(){
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

export default MichiganAIDemo;