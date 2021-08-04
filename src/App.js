//import logo from './logo.svg';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank.js';
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';

const particlesOptions = {
  particles: {
    line_linked:{
      number:{
        value: 30,
        density:{
          enable: true,
          value_area: 800
        }
      },
      shadow:{
        enable: true,
        color: '#3CA9D1',
        blur: 5
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={{particlesOptions}}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        
        {/*
        <FaceRecognition />} */}
    </div>
  );
}

export default App;
