import React, {useEffect} from 'react';
import TarotCardContainer from './containers/TarotCardContainer/TarotCardContainer';
import BackChevronButtonContainer from './containers/BackChevronButtonContainer/BackChevronButtonContainer'
import './App.css';
import {useTarotStore, BACK_OF_CARD_NUMBER} from './store';

function App() {
  const enabled = useTarotStore((state) => state.card.number) !== BACK_OF_CARD_NUMBER;
  const shuffleDeck = useTarotStore((state) => state.shuffleDeck);
  useEffect(shuffleDeck, [shuffleDeck])
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
