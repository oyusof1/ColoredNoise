import cube from '../assets/cube.gif';
import spin from '../assets/spin.gif';
import glitch from '../assets/glitch.gif';
import '../App.css';
import { useState } from 'react';

function ComingSoon() {
  const [logo, setLogo] = useState(cube);

  const showLogo = (logo) => {
    setLogo(logo);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          C0M1NG S00N!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='buttons'>
          <button onClick={() => showLogo(spin)}>SP1N</button>
          <button onClick={() => showLogo(cube)}>CUB3</button>
          <button onClick={() => showLogo(glitch)}>GL1TCH</button>
        </div>
    </div>
  );
}

export default ComingSoon;