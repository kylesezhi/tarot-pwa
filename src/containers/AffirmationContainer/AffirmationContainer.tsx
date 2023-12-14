import React from 'react';
import './AffirmationContainer.css';
import Affirmation from '../../components/Affirmation/Affirmation';
import {useTarotStore} from '../../store';

function AffirmationContainer({enabled = false}) {
  const affirmation = useTarotStore((state) => state.getAffirmation)()
  const isShowing = useTarotStore((state) => state.isShowing);

  return (
    <div className='affirmation-container' >
      <Affirmation affirmation={affirmation} show={isShowing} />
    </div>
  )
}

export default AffirmationContainer;