import React from "react";
import "./RotateTarotCardImage.css";
import { Orientation } from "../../store/types";
import { animated, config, useSpring } from "@react-spring/web";

interface TarotImageProps {
  number: number;
  orientation?: Orientation;
}

function RotateTarotCardImage({
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
      className="rotate-tarot-image"
      alt="tarot-card"
      style={reversedStyle}
    />
  );
}

export default RotateTarotCardImage;
