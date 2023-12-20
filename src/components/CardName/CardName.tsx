import React from "react";
import "./CardName.css";

interface TitleProps {
  title: string;
  isReversed?: boolean;
}

function CardName({ title, isReversed = false }: TitleProps) {
  const finalTitle = `${isReversed ? "Reversed " : ""}${title}`;
  return <div className="card-name">{finalTitle}</div>;
}

export default CardName;
