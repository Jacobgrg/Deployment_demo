import logo from './logo.svg';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import Particle from './Components/particles';
import './Components/pokemon.css'

function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <body>
        <div className="App"><Particle/></div>
            {/* <p style={{color:"white"}}>HELLO</p> */}
                <div className='h1'> 
                <div className='box'>
                    <center>
                    {/* <p style={{color:"Black"}}>WELCOME TO  MY PORTFOLIO</p> */}
                    <p className='pkmn-text'>WELCOME TO  MY PORTFOLIO</p>
                    <div className='option'>
                    <p className='pkmn-text'><button className='button'>Education</button></p>
                    <p className='pkmn-text'><button className='button'>Resume</button></p>
                    <p className='pkmn-text'><button className='button'>Skills</button></p>
                    <p className='pkmn-text'><button className='button'>Contacts</button></p>
                    </div>
                        
                    </center>
                        
                </div>
                </div>
               
            
    </body>
    

    )
}

export default App;
