import React from "react";
import "./LabyrinthosLink.css";
import { getLabyrinthosUrl } from "../../utils/helpers";

interface DescriptionProps {
  children: string;
  name: string;
  type: string;
}

function LabyrinthosLink({ children, name, type }: DescriptionProps) {
  return (
    <a
      href={getLabyrinthosUrl(name, type)}
      target="blank"
      className="labyrinthos-link"
    >
      {children}
    </a>
  );
}

export default LabyrinthosLink;
