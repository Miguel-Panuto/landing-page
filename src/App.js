import React from 'react';

import GlobalStyle from './global-styles';
import ContainerDesc from './components/ContainerDesc';
import ContainerBanner from './components/ContainerBanner';
import Section from './components/Section';

function App() {
  return (
    <div className="main-content">
      <GlobalStyle/>
      <header>
        <h1>LP</h1>
      </header>
      <main>
        <ContainerBanner />
        <ContainerDesc />
        <Section />
      </main>
      <footer>
        <p>Todos os direitos reservados a Miguel Panuto</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non.</p>
      </footer>
    </div>
  );
}

export default App;
