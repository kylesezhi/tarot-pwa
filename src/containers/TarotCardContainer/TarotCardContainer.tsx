import React from 'react';
import './TarotCardContainer.css';
import {useTarotStore, BACK_OF_CARD_NUMBER} from '../../store';
import TarotCard from '../../components/TarotCard/TarotCard';
import {drawCard} from '../../utils/helpers'

function TarotCardContainer() {
  const cardNumber = useTarotStore((state) => state.cardNumber)
  const setCardNumber = useTarotStore((state) => state.setCardNumber)
  const handleClick = () => {
    if (cardNumber !== BACK_OF_CARD_NUMBER) {
      return;
    }
    const newCardNumber = drawCard();
    setCardNumber(newCardNumber);
  };

  return (
    <div onClick={handleClick} className='tarot-card-container' >
      <TarotCard cardNumber={cardNumber} />
    </div>
  )
}

export default TarotCardContainer;