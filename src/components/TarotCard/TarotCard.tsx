import React from 'react';
import './TarotCard.css';
import { useSpring, animated } from '@react-spring/web';

interface TarotProps {
  number: number,
  reversed: boolean,
  isShowing: boolean
}

function TarotCard({number = 78, reversed = false, isShowing}: TarotProps) {
  const tarotImage = require(`./assets/${number}.webp`);
  const style = {
    transform: reversed ? 'rotate(180deg)' : 'rotate(0deg)',
  };
  return (
    <animated.img src={tarotImage} className="tarot-card" style={style} />
  )
}

export default TarotCard;