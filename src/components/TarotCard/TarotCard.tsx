import React, {useState, useEffect} from 'react';
import './TarotCard.css';
import { useSpring, animated, config } from '@react-spring/web';
import backImage from './assets/78.webp';

interface TarotProps {
  number: number,
  reversed: boolean,
  isShowing: boolean
}

function TarotCard({number = 78, reversed = false, isShowing}: TarotProps) {
  const tarotImage = require(`./assets/${number}.webp`);

  // Fade in card on load
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000); // Delay by 2 seconds (2000 milliseconds)
  }, []);

  const { transform, opacity, height } = useSpring({
    opacity: !load ? 0 : isShowing ? 0 : 1,
    transform: `perspective(900px) rotateY(${!isShowing ? 180 : 0}deg)`,
    height: load ? '90vmin' : '40vmin',
    // config: { mass: 10, tension: 500, friction: 80 },
    config: config.molasses
  });
  const frontStyle = {
    opacity: opacity.to((o) => !isShowing ? 0 : 1 - o),
    transform
  };
  const backStyle = {
    opacity,
    transform,
    rotateX: "180deg",
    height
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