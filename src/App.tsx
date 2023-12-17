import React, {useEffect} from 'react';
import TarotCardContainer from './containers/TarotCardContainer/TarotCardContainer';
import BackChevronButtonContainer from './containers/BackChevronButtonContainer/BackChevronButtonContainer';
import './App.css';
import {useTarotStore} from './store';
import './assets/fonts.css';
import AffirmationContainer from './containers/AffirmationContainer/AffirmationContainer';
import InterpretationContainer from './containers/InterpretationContainer/InterpretationContainer';

function App() {
  const shuffleDeck = useTarotStore((state) => state.shuffleDeck);

  // Shuffle the deck on initial app load
  useEffect(shuffleDeck, [shuffleDeck])

  return (
    <div className="App">
      <div className="App-card">
        <BackChevronButtonContainer />
        <TarotCardContainer />
      </div>
      <AffirmationContainer />
      <InterpretationContainer />
    </div>
  );
}

export default App;
