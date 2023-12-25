import React from "react";
import "./TarotCardImage.css";
import { Orientation } from "../../store/types";

interface TarotImageProps {
  number: number;
  orientation?: Orientation;
}

function TarotCardImage({
  number = 78,
  orientation = "upright",
}: TarotImageProps) {
  const tarotImage = require(`../../assets/Cards/${number}.webp`);

  return <img src={tarotImage} className="tarot-image" alt="tarot-card" />;
}

export default TarotCardImage;
