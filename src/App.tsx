import React, {useEffect} from 'react';
import TarotCardContainer from './containers/TarotCardContainer/TarotCardContainer';
import BackChevronButtonContainer from './containers/BackChevronButtonContainer/BackChevronButtonContainer'
import './App.css';
import {useTarotStore} from './store';

function App() {
  const shuffleDeck = useTarotStore((state) => state.shuffleDeck);
  const isShowing = useTarotStore((state) => state.isShowing)

  // Shuffle the deck on initial app load
  useEffect(shuffleDeck, [shuffleDeck])

  return (
    <div className="App">
      <header className="App-header">
        <BackChevronButtonContainer enabled={isShowing} />
        <TarotCardContainer />
      </header>
    </div>
  );
}

export default App;
