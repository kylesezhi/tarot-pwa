import React, { useState } from "react";
import { useGesture } from "react-use-gesture";
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
  const [zoom, setZoom] = useState(0);
  const onLoad = () => setLoad(true);
  const { opacity, scale } = useSpring({
    opacity: load ? 1 : 0,
    scale: 1 + zoom,
    config: config.molasses,
  });
  const bind = useGesture({
    onHover: ({ hovering }) => (hovering ? setZoom(0.1) : setZoom(0)),
    onDrag: ({ active }) => (active ? setZoom(0) : setZoom(0.1)),
  });

  const style = { opacity, scale };

  return (
    <Link to={`/cards/${number}/upright`} style={{ textDecoration: "none" }}>
      <animated.div
        className="static-tarot-card-container"
        style={{ opacity }}
        {...bind()}
      >
        <div className="static-tarot-image-container">
          <animated.img
            src={Cards[number]}
            className="tarot-image"
            alt="tarot-card"
            onLoad={onLoad}
            style={style}
          />
        </div>
        <CardName title={card.name} />
      </animated.div>
    </Link>
  );
}

export default StaticTarotCardContainer;
