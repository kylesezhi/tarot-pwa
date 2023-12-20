import "./AllCards.css";
import { useTarotStore } from "../../store";
import StaticTarotCardContainer from "../../containers/StaticTarotCardContainer/StaticTarotCardContainer";

function AllCards() {
  const deck = useTarotStore((state) => state.deck);
  return (
    <div className="all-cards">
      {deck.map(({ number }) => (
        <StaticTarotCardContainer number={number} />
      ))}
    </div>
  );
}

export default AllCards;
