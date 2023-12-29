import React from "react";
import { Link } from "react-router-dom";
import "./StaticTarotCardContainer.css";
import CardName from "../../components/CardName/CardName";
import { Interpretation } from "../../store/types";
import { Cards } from "../../assets/Cards/index";

interface StaticTarotCardContainerProps {
  card: Interpretation;
  number: number;
}

function StaticTarotCardContainer({
  card,
  number,
}: StaticTarotCardContainerProps) {
  return (
    <Link to={`/cards/${number}/upright`} style={{ textDecoration: "none" }}>
      <div className="static-tarot-card-container">
        <div className="static-tarot-image-container">
          <img src={Cards[number]} className="tarot-image" alt="tarot-card" />
        </div>
        <CardName title={card.name} />
      </div>
    </Link>
  );
}

export default StaticTarotCardContainer;
