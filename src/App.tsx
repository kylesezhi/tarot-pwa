import React from 'react';
import TarotCardContainer from './containers/TarotCardContainer/TarotCardContainer';
import BackChevronButtonContainer from './containers/BackChevronButtonContainer/BackChevronButtonContainer'
import './App.css';
import {useTarotStore, CARD_BACK} from './store';

function App() {
  const enabled = useTarotStore((state) => state.cardNumber) !== CARD_BACK;
  return (
    <div className="App">
      <header className="App-header">
        <BackChevronButtonContainer enabled={enabled} />
        <TarotCardContainer />
      </header>
    </div>
  );
}

export default App;
