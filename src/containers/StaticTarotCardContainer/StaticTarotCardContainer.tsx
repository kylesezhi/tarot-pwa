import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StaticTarotCardContainer.css";
import CardName from "../../components/CardName/CardName";
import { Interpretation } from "../../store/types";
import { Cards } from "../../assets/Cards/index";
import { animated, config, useSpring } from "@react-spring/web";

interface StaticTarotCardContainerProps {
  card: Interpretation;
  number: number;
}

function StaticTarotCardContainer({
  card,
  number,
}: StaticTarotCardContainerProps) {
  // Fade in card on load
  const [load, setLoad] = useState<boolean>(false);
  const onLoad = () => setLoad(true);
  const { opacity } = useSpring({
    opacity: load ? 1 : 0,
    height: load ? "60vh" : "40vmin",
    config: config.molasses,
  });

  return (
    <Link to={`/cards/${number}/upright`} style={{ textDecoration: "none" }}>
      <animated.div className="static-tarot-card-container" style={{ opacity }}>
        <div className="static-tarot-image-container">
          <animated.img
            src={Cards[number]}
            className="tarot-image"
            alt="tarot-card"
            onLoad={onLoad}
            style={{ opacity }}
          />
        </div>
        <CardName title={card.name} />
      </animated.div>
    </Link>
  );
}

export default StaticTarotCardContainer;
