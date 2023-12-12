import React from 'react';
import './TarotCard.css';

function TarotCard({number = 78, reversed = false}) {
  const tarotImage = require(`./assets/${number}.webp`);
  const style = {
    transform: reversed ? 'rotate(180deg)' : 'rotate(0deg)'
  };
  return (
    <img src={tarotImage} className="tarot-card" style={style} alt="tarot-card" />
  )
}

export default TarotCard;