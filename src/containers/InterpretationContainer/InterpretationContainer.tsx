import React from 'react';
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

  const style = {
    opacity: isShowing ? '1': '0'
  }

  return (
    <div style={style}>
      <Title title={title} />
      <Keywords>{keywords}</Keywords>
      <Description>{description}</Description>
    </div>
  )
}

export default InterpretationContainer;