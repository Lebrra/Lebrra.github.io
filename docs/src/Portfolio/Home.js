import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Games from './GameProjects';
import Projects from './OtherProjects';
import Outro from './Outro';
import Links from './Links';
import Divider from './Divider';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    return <>
        <Intro />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Games />
        <Divider />
        <Projects />
        <Divider />


        <Outro />
        <Links />
    </>
}

export default Home;