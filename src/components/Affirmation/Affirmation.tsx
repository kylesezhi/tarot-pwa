import React from 'react';
import './Affirmation.css';

interface AffirmationProps {
  affirmation: string,
  show: boolean
}

function Affirmation({affirmation, show = false}: AffirmationProps) {
  return (
    <div className="affirmation" style={{opacity: show ? 0.7 : 0}}>
      {affirmation}
    </div>
  )
}

export default Affirmation;