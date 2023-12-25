import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./StaticTarotCardContainer.css";
import CardName from "../../components/CardName/CardName";
import { Interpretation } from "../../store/types";
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
  const [load, setLoad] = useState(false);
  const tarotImage = `https://tarot-images.netlify.app/${number}.webp`;
  useEffect(() => {
    const img = new Image();
    img.src = tarotImage;
    img.onload = () => {
      setLoad(true);
    };
  }, [tarotImage]);

  const { opacity } = useSpring({
    opacity: load ? 1 : 0,
    height: load ? "90vmin" : "40vmin",
    config: config.molasses,
  });

  return (
    <Link to={`/cards/${number}/upright`} style={{ textDecoration: "none" }}>
      <div className="static-tarot-card-container">
        <div className="static-tarot-image-container">
          <animated.img
            src={tarotImage}
            className="tarot-image"
            alt="tarot-card"
            style={{ opacity }}
          />
        </div>
        <CardName title={card.name} />
      </div>
    </Link>
  );
}

export default StaticTarotCardContainer;
