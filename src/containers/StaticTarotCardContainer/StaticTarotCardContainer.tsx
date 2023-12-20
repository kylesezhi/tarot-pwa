import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <Link to={`/card/${number}`} style={{ textDecoration: "none" }}>
      <div className="static-tarot-card-container">
        <div className="static-tarot-image-container">
          <TarotCardImage number={number} reversed={false} />
        </div>
        <CardName title={card.name} />
      </div>
    </Link>
  );
}

export default StaticTarotCardContainer;
