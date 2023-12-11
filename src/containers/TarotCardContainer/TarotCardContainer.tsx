import React, { useState } from 'react';
import './TarotCardContainer.css';
import TarotCard from '../../components/TarotCard/TarotCard';

function TarotCardContainer() {
  const [cardNumber, setCardNumber] = useState<number>(78);
  const handleClick = () => setCardNumber(0);

  return (
    <div onClick={handleClick} >
      <TarotCard cardNumber={cardNumber} />
    </div>
  )
}

export default TarotCardContainer;