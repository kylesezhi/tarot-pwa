import React from 'react';
import './BackChevronButtonContainer.css';
import BackChevron from '../../components/BackChevron/BackChevron';
import {useTarotStore} from '../../store';

function BackChevronButtonContainer({enabled = false}) {
  const back = useTarotStore((state) => state.back)
  const handleClick = () => {
    if (!enabled) {
      return;
    }
    back();
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