import React from 'react';
import './TarotCardContainer.css';
import {useTarotStore} from '../../store';
import TarotCard from '../../components/TarotCard/TarotCard';
import {drawCard, getCardName} from '../../utils/helpers'

function TarotCardContainer() {
  const cardNumber = useTarotStore((state) => state.cardNumber)
  const setCardNumber = useTarotStore((state) => state.setCardNumber)
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