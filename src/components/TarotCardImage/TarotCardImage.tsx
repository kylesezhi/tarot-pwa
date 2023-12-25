import React from "react";
import "./TarotCardImage.css";
import { Orientation } from "../../store/types";
import { animated, config, useSpring } from "@react-spring/web";

interface TarotImageProps {
  number: number;
  orientation?: Orientation;
}

function TarotCardImage({
  number = 78,
  orientation = "upright",
}: TarotImageProps) {
  const tarotImage = require(`../../assets/Cards/${number}.webp`);

  const { transform } = useSpring({
    transform: `rotate(${orientation === "reversed" ? "180" : "0"}deg)`,
    config: config.molasses,
  });

  const reversedStyle = {
    transform,
  };

  return (
    <animated.img
      src={tarotImage}
      className="tarot-image"
      alt="tarot-card"
      style={reversedStyle}
    />
  );
}

export default TarotCardImage;
