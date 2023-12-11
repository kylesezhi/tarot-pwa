import React from 'react';
import tarotBack from './assets/78.webp';
import './TarotCard.css';

function TarotCard() {
  return (
    <img src={tarotBack} className="tarot-card" alt="tarot-card" />
  )
}

export default TarotCard;