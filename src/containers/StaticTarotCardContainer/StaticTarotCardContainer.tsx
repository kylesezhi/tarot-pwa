import React from "react";
import "./StaticTarotCardContainer.css";
import TarotCardImage from "../../components/TarotCardImage/TarotCardImage";
import CardName from "../../components/CardName/CardName";
import { Interpretation } from "../../store";

interface StaticTarotCardContainerProps {
  card: Interpretation;
  number: number;
}

function StaticTarotCardContainer({
  card,
  number,
}: StaticTarotCardContainerProps) {
  const onClick = () => {
    console.log("TODO");
  };

  return (
    <div onClick={onClick} className="static-tarot-card-container">
      <div className="static-tarot-image-container">
        <TarotCardImage number={number} reversed={false} />
      </div>
      <CardName title={card.name} />
    </div>
  );
}

export default StaticTarotCardContainer;
