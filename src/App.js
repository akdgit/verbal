import React from 'react';
import './App.css';
import SearchVerbs from "./components/search.js"
import ima from "./images/teacher"
function App() {
  return (
    <div className="App">
      <div className= "main" role="main">
        <div className = "in-buscador" aria-labelledby="buscador-instrucciones">
          <span className='inst' tabIndex="0"> Ingrese el verbo que desea consultar en su forma simple, en inglés. </span>
          <SearchVerbs />
        </div>
        
        <div className="texto-img">
          <div className='texto' tabIndex="0">
            <p>
              Consulta las diferentes formas que puede tomar un verbo en inglés:
            </p>
            <ul>
              <li className='inst'>Ingresa el verbo a consultar en presente, por ejemplo: <i>"Break".</i></li>
              <li className='inst'>Haz clic en el botón "Cosnultar".</li>
              <li className='inst'>Podrás ver en los resultados el verbo en su forma simple, tercera persona, pasado simple, pasado participio, gerundio y su significado en castellano.</li>
            </ul>
            <mark className='nota' tabIndex="0">
              <p><b>Importante: </b> Solo se pueden consultar verbos, mas no así sustantivos, adverbios, adjetivos, etc.</p>
            </mark>
        
          </div>
          <div className='imagen'>
            <img alt='imagen decorativa' src= { ima } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
