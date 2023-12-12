import React from 'react';
import './BackChevronButtonContainer.css';
import BackChevron from '../../components/BackChevron/BackChevron';
import {useTarotStore, BACK_OF_CARD_NUMBER} from '../../store';

function BackChevronButtonContainer({enabled = false}) {
  const setCardNumber = useTarotStore((state) => state.setCardNumber)
  const handleClick = () => {
    if (!enabled) {
      return;
    }
    setCardNumber(BACK_OF_CARD_NUMBER);
  };
  const style = {
    cursor: enabled ? 'pointer' : 'auto'
  }

  return (
    <div onClick={handleClick} className='back-chevron-button-container' style={style} >
      <BackChevron show={enabled} />
    </div>
  )
}

export default BackChevronButtonContainer;