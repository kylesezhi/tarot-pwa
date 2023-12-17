import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import './AffirmationContainer.css';
import Affirmation from '../../components/Affirmation/Affirmation';
import {useTarotStore} from '../../store';

function AffirmationContainer({enabled = false}) {
  const affirmation = useTarotStore((state) => state.getAffirmation)()
  const isShowing = useTarotStore((state) => state.isShowing);
  const {opacity} = useSpring({
    opacity: isShowing ? 1 : 0,
    config: config.molasses,
  });
  const style = {
    opacity,
  }

  return (
    <animated.div className='affirmation-container' style={style}>
      <Affirmation affirmation={affirmation} show={isShowing} />
    </animated.div>
  )
}

export default AffirmationContainer;