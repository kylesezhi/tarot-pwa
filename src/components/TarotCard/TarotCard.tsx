import React from 'react';
import './TarotCard.css';

function TarotCard({number = 78, reversed = false}) {
  const tarotImage = require(`./assets/${number}.webp`);
  const style = {
    transform: reversed ? 'scaleY(-1)' : 'scaleY(1)'
  };
  return (
    <img src={tarotImage} className="tarot-card" style={style} alt="tarot-card" />
  )
}

export default TarotCard;