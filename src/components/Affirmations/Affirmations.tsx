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
        <div className="affirmation-container">
          <Affirmation key={affirmation} affirmation={affirmation} />
        </div>
      ))}
    </div>
  );
}

export default Affirmations;
