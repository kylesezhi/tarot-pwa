import React from "react";
import "./TarotCardContainer.css";
import { useTarotStore } from "../../store";
import TarotCard from "../../components/TarotCard/TarotCard";

function TarotCardContainer() {
  const drawCard = useTarotStore((state) => state.drawCard);
  const card = useTarotStore((state) => state.card);
  const isCardShowing = useTarotStore((state) => state.isCardShowing);
  const isInterpretationShowing = useTarotStore(
    (state) => state.isInterpretationShowing,
  );
  const showInterpretation = useTarotStore((state) => state.showInterpretation);

  const onClick = () => {
    if (!isCardShowing) {
      drawCard();
    } else if (!isInterpretationShowing) {
      showInterpretation();
    }
  };

  return (
    <div onClick={onClick} className="tarot-card-container">
      <TarotCard
        number={card.number}
        orientation={card.orientation}
        isCardShowing={isCardShowing}
      />
    </div>
  );
}

export default TarotCardContainer;
