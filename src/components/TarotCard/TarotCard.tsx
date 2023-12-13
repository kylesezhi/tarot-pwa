import React from 'react';
import './TarotCard.css';
import { useSpring, animated } from '@react-spring/web';
import backImage from './assets/78.webp';

interface TarotProps {
  number: number,
  reversed: boolean,
  isShowing: boolean
}

function TarotCard({number = 78, reversed = false, isShowing}: TarotProps) {
  const tarotImage = require(`./assets/${number}.webp`);
  const { transform, opacity } = useSpring({
    opacity: !isShowing ? 1 : 0,
    transform: `perspective(900px) rotateY(${!isShowing ? 180 : 0}deg)`,
    config: { mass: 10, tension: 500, friction: 80 },
  });
  const frontStyle = {
    opacity: opacity.to((o) => 1 - o),
    transform
  };
  const backStyle = {
    opacity,
    transform,
    rotateX: "180deg",
  }
  const reversedStyle = {
    transform: `rotate(${reversed ? '180' : '0'}deg)`,
  }

  return (
    <div className="tarot-sides-container">
      <animated.div className="tarot-card" style={frontStyle}>
        <img src={tarotImage} className="tarot-image" alt="tarot-card" style={reversedStyle} />
      </animated.div>
      <animated.img src={backImage} className="tarot-card" style={backStyle} />
    </div>
  )
}

export default TarotCard;