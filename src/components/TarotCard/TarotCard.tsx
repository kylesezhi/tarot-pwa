import React, { useState, useEffect } from "react";
import TarotCardImage from "../TarotCardImage/TarotCardImage";
import "./TarotCard.css";
import { useSpring, animated, config } from "@react-spring/web";
import Version from "../Version/Version";

interface TarotProps {
  number: number;
  reversed: boolean;
  isCardShowing: boolean;
}

function TarotCard({
  number = 78,
  reversed = false,
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
        <TarotCardImage number={number} reversed={reversed} />
      </animated.div>
      <animated.div id="back" className="tarot-card" style={backStyle}>
        <TarotCardImage number={78} />
        <Version />
      </animated.div>
    </div>
  );
}

export default TarotCard;
