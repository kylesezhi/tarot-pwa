import React, {useEffect} from 'react';
import TarotCardContainer from './containers/TarotCardContainer/TarotCardContainer';
import BackChevronButtonContainer from './containers/BackChevronButtonContainer/BackChevronButtonContainer';
import Title from './components/Title/Title';
import './App.css';
import {useTarotStore} from './store';
import './assets/Lora/fonts.css';

function App() {
  const shuffleDeck = useTarotStore((state) => state.shuffleDeck);
  const isShowing = useTarotStore((state) => state.isShowing)
  const getInterpretation = useTarotStore((state) => state.getInterpretation)

  // Shuffle the deck on initial app load
  useEffect(shuffleDeck, [shuffleDeck])

  return (
    <div className="App">
      <div className="App-card">
        <BackChevronButtonContainer enabled={isShowing} />
        <TarotCardContainer />
      </div>
      <Title title={getInterpretation() && getInterpretation().name} show />
    </div>
  );
}

export default App;
