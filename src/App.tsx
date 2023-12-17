import React, {useEffect} from 'react';
import TarotCardContainer from './containers/TarotCardContainer/TarotCardContainer';
import BackChevronButtonContainer from './containers/BackChevronButtonContainer/BackChevronButtonContainer';
import Title from './components/Title/Title';
import Keywords from './components/Keywords/Keywords';
import Description from './components/Description/Description';
import './App.css';
import {useTarotStore} from './store';
import './assets/fonts.css';
import AffirmationContainer from './containers/AffirmationContainer/AffirmationContainer';

function App() {
  const shuffleDeck = useTarotStore((state) => state.shuffleDeck);
  const isShowing = useTarotStore((state) => state.isShowing);
  const title = useTarotStore((state) => state.getTitle)();
  const keywords = useTarotStore((state) => state.getKeywords)();
  const description = useTarotStore((state) => state.getDescription)();

  // Shuffle the deck on initial app load
  useEffect(shuffleDeck, [shuffleDeck])

  return (
    <div className="App">
      <div className="App-card">
        {/* TODO move isShowing to container */}
        <BackChevronButtonContainer enabled={isShowing} />
        <TarotCardContainer />
      </div>
      <AffirmationContainer />
      {/* TODO make containers for these components */}
      <Title title={title} show={isShowing} />
      <Keywords>{keywords}</Keywords>
      <Description show>{description}</Description>
    </div>
  );
}

export default App;
