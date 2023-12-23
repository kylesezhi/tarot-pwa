import React from "react";
import "./Affirmations.css";
import Affirmation from "../Affirmation/Affirmation";

interface AffirmationProps {
  affirmations: Array<string>;
}

function Affirmations({ affirmations }: AffirmationProps) {
  return (
    <div className="affirmations">
      {affirmations.map((affirmation) => (
        <Affirmation key={affirmation} affirmation={affirmation} />
      ))}
    </div>
  );
}

export default Affirmations;
