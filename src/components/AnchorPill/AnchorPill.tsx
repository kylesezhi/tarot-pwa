import React from "react";
import "./AnchorPill.css";

interface AnchorPillProps {
  link: string;
  title: string;
}

function AnchorPill({ link, title }: AnchorPillProps) {
  return (
    <a href={link} className="anchor-pill">
      {title}
    </a>
  );
}

export default AnchorPill;
