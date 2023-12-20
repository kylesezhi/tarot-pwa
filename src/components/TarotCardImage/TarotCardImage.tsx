import React from "react";
import "./TarotCardImage.css";

interface TarotImageProps {
  number: number;
  reversed?: boolean;
}

function TarotCardImage({ number = 78, reversed = false }: TarotImageProps) {
  const tarotImage = require(`../../assets/Cards/${number}.webp`);

  const reversedStyle = {
    transform: `rotate(${reversed ? "180" : "0"}deg)`,
  };

  return (
    <img
      src={tarotImage}
      className="tarot-image"
      alt="tarot-card"
      style={reversedStyle}
    />
  );
}

export default TarotCardImage;
