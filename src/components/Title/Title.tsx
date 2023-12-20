import React from "react";
import "./Title.css";

interface TitleProps {
  title: string;
  isReversed?: boolean;
}

function Title({ title, isReversed }: TitleProps) {
  const finalTitle = `${isReversed ? "Reversed " : ""}${title}`;
  return <div className="title">{finalTitle}</div>;
}

export default Title;
