import './style.css'
import { BreakingBad } from './src/breakingbad/breakingbad_app';

document.querySelector('#app').innerHTML = `
  <div>
    <a target="_blank">
      <img src="mainimg.jpg" class="logo" alt="Vite logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>

    <hr>

    <div class="card">
    
    </div>
    
  </div>
`;



document.querySelector('#app-title').innerHTML = 'Breaking Bad App';

const card = document.querySelector('.card');
BreakingBad( card )

