import React, {useEffect} from 'react';
import TarotCardContainer from './containers/TarotCardContainer/TarotCardContainer';
import BackChevronButtonContainer from './containers/BackChevronButtonContainer/BackChevronButtonContainer';
import Title from './components/Title/Title';
import './App.css';
import {useTarotStore} from './store';
import './assets/Lora/fonts.css';

function App() {
  const shuffleDeck = useTarotStore((state) => state.shuffleDeck);
  const isShowing = useTarotStore((state) => state.isShowing);
  const title = useTarotStore((state) => state.getTitle)();

  // Shuffle the deck on initial app load
  useEffect(shuffleDeck, [shuffleDeck])

  return (
    <div className="App">
      <div className="App-card">
        <BackChevronButtonContainer enabled={isShowing} />
        <TarotCardContainer />
      </div>
      <Title title={title} show={isShowing} />
    </div>
  );
}

export default App;
