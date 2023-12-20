import React from "react";
import "./StaticTarotCardContainer.css";
import TarotCardImage from "../../components/TarotCardImage/TarotCardImage";

function StaticTarotCardContainer({ number = 79 }) {
  const onClick = () => {
    console.log("TODO");
  };

  return (
    <div onClick={onClick} className="static-tarot-card-container">
      <TarotCardImage number={number} reversed={false} />
    </div>
  );
}

export default StaticTarotCardContainer;
