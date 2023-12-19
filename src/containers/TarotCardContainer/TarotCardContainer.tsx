import React from "react";
import "./TarotCardContainer.css";
import { useTarotStore } from "../../store";
import TarotCard from "../../components/TarotCard/TarotCard";

function TarotCardContainer() {
  const drawCard = useTarotStore((state) => state.drawCard);
  const card = useTarotStore((state) => state.card);
  const isShowing = useTarotStore((state) => state.isShowing);

  return (
    <div onClick={drawCard} className="tarot-card-container">
      <TarotCard
        number={card.number}
        reversed={card.reversed}
        isShowing={isShowing}
      />
    </div>
  );
}

export default TarotCardContainer;
