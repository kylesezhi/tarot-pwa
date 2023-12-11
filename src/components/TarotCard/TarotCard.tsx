import React from 'react';
import './TarotCard.css';

function TarotCard({cardNumber = 78}) {
  const tarotImage = require(`./assets/${cardNumber}.webp`);
  return (
    <img src={tarotImage} className="tarot-card" alt="tarot-card" />
  )
}

export default TarotCard;