import IntroJams from './IntroJams';
import Jams from './JamProjects';
import OutroJams from './OutroJams';
import Links from './Links';
import Divider from './Divider';
import 'bootstrap/dist/css/bootstrap.min.css';

function GameJams(){
    return <>
        <IntroJams />
        <Divider />
        <Jams />
        <Divider />

        <OutroJams />
        <Links />
    </>
}

export default GameJams;