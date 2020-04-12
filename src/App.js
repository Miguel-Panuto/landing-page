import React from 'react';
import banner from './assets/images/banner.png';
import { FiArrowDown } from "react-icons/fi";
import './App.css'

function App() {
  return (
    <div className="main-content">
      <header>
        <h1>LP</h1>
      </header>
      <main>
        <div className="container-banner">
          <div className="center">
            <div className="form">
              <h2>
                Preencha o formulário e inicie a sua
                caminhada para virar um webmaster!
              </h2>
            </div>{/*form*/}
          </div>{/*center*/}
        </div>{/*container-banner*/}
      </main>
    </div>
  );
}

export default App;
