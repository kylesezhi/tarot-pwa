import React from 'react';
import TarotCardContainer from './containers/TarotCardContainer/TarotCardContainer';
import BackChevronButtonContainer from './containers/BackChevronButtonContainer/BackChevronButtonContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BackChevronButtonContainer />
        <TarotCardContainer />
      </header>
    </div>
  );
}

export default App;
