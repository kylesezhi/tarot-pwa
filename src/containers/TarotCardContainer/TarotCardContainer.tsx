import React, { useState } from 'react';
import './TarotCardContainer.css';
import TarotCard from '../../components/TarotCard/TarotCard';
import {drawCard} from '../../utils/helpers'

function TarotCardContainer() {
  const [cardNumber, setCardNumber] = useState<number>(78);
  const handleClick = () => setCardNumber(drawCard());

  return (
    <div onClick={handleClick} >
      <TarotCard cardNumber={cardNumber} />
    </div>
  )
}

export default TarotCardContainer;