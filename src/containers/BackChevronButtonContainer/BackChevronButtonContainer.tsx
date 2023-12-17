import React from 'react';
import './BackChevronButtonContainer.css';
import BackChevron from '../../components/BackChevron/BackChevron';
import {useTarotStore} from '../../store';

function BackChevronButtonContainer() {
  const back = useTarotStore((state) => state.back)
  const isShowing = useTarotStore((state) => state.isShowing);
  const handleClick = () => {
    if (!isShowing) {
      return;
    }
    back();
  };
  const style = {
    cursor: isShowing ? 'pointer' : 'auto'
  }

  return (
    <div onClick={handleClick} className='back-chevron-button-container' style={style} >
      <BackChevron show={isShowing} />
    </div>
  )
}

export default BackChevronButtonContainer;