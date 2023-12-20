import React, { useEffect } from "react";
import TarotCardContainer from "./containers/TarotCardContainer/TarotCardContainer";
import BackChevronButtonContainer from "./containers/BackChevronButtonContainer/BackChevronButtonContainer";
import ShareButtonContainer from "./containers/ShareButtonContainer/ShareButtonContainer";
import "./App.css";
import { useTarotStore } from "./store";
import "./assets/fonts.css";
import InterpretationContainer from "./containers/InterpretationContainer/InterpretationContainer";

function App() {
  const shuffleDeck = useTarotStore((state) => state.shuffleDeck);

  // Shuffle the deck on initial app load
  useEffect(shuffleDeck, [shuffleDeck]);

  return (
    <div className="App">
      <div className="App-card">
        <div className="top-nav">
          <BackChevronButtonContainer />
          <ShareButtonContainer />
        </div>
        <TarotCardContainer />
      </div>
      <InterpretationContainer />
    </div>
  );
}

export default App;
