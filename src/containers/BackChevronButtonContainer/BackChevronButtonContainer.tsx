import React from 'react';
import './BackChevronButtonContainer.css';
import BackChevron from '../../components/BackChevron/BackChevron';

function BackChevronButtonContainer({enabled = false}) {
  const handleClick = () => enabled && console.log('click!');
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