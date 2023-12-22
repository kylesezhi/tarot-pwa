import React, { useState, useEffect } from "react";
import TarotCardImage from "../TarotCardImage/TarotCardImage";
import "./TarotCard.css";
import { useSpring, animated, config } from "@react-spring/web";
import Version from "../Version/Version";
import { Orientation } from "../../store";

interface TarotProps {
  number: number;
  orientation: Orientation;
  isCardShowing: boolean;
}

function TarotCard({
  number = 78,
  orientation = "upright",
  isCardShowing,
}: TarotProps) {
  // Fade in card on load
  const [load, setLoad] = useState(false);
  useEffect(() => setLoad(true), []);

  const { transform, opacity, height } = useSpring({
    opacity: !load ? 0 : isCardShowing ? 0 : 1,
    transform: `perspective(900px) rotateY(${!isCardShowing ? 180 : 0}deg)`,
    height: load ? "90vmin" : "40vmin",
    config: config.molasses,
  });
  const frontStyle = {
    opacity: opacity.to((o) => (!isCardShowing ? 0 : 1 - o)),
    transform,
  };
  const backStyle = {
    opacity,
    transform,
    height,
  };

  return (
    <div className="tarot-sides-container">
      <animated.div id="front" className="tarot-card" style={frontStyle}>
        <TarotCardImage number={number} orientation={orientation} />
      </animated.div>
      <animated.div id="back" className="tarot-card" style={backStyle}>
        <TarotCardImage number={78} />
        <Version />
      </animated.div>
    </div>
  );
}

export default TarotCard;
