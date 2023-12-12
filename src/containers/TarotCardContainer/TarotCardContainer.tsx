import React, { useState } from 'react';
import './TarotCardContainer.css';
import TarotCard from '../../components/TarotCard/TarotCard';
import {drawCard, getCardName} from '../../utils/helpers'

function TarotCardContainer() {
  const [cardNumber, setCardNumber] = useState<number>(78);
  const handleClick = () => {
    const cardNumber = drawCard();
    setCardNumber(cardNumber);
    console.log(getCardName(cardNumber));
  };

  return (
    <div onClick={handleClick} className='tarot-card-container' >
      <TarotCard cardNumber={cardNumber} />
    </div>
  )
}

export default TarotCardContainer;