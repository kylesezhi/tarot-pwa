import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import './InterpretationContainer.css';
import {useTarotStore} from '../../store';
import Title from '../../components/Title/Title';
import Keywords from '../../components/Keywords/Keywords';
import Description from '../../components/Description/Description';

function InterpretationContainer() {
  const title = useTarotStore((state) => state.getTitle)();
  const keywords = useTarotStore((state) => state.getKeywords)();
  const description = useTarotStore((state) => state.getDescription)();
  const isShowing = useTarotStore((state) => state.isShowing);
  const {opacity, paddingTop} = useSpring({
    opacity: isShowing ? 1 : 0,
    paddingTop: isShowing ? '0' : '50px',
    config: config.molasses,
  });

  const style = {
    opacity,
    paddingTop
  }

  return (
    <animated.div style={style}>
      <Title title={title} />
      <Keywords>{keywords}</Keywords>
      <Description>{description}</Description>
    </animated.div>
  )
}

export default InterpretationContainer;