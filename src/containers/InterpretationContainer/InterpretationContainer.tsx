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

  return (
    <div>
      <Title title={title} show={isShowing} />
      <Keywords>{keywords}</Keywords>
      <Description show>{description}</Description>
    </div>
  )
}

export default InterpretationContainer;