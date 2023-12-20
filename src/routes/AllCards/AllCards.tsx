import "./AllCards.css";
import { useTarotStore } from "../../store";
import StaticTarotCardContainer from "../../containers/StaticTarotCardContainer/StaticTarotCardContainer";

function AllCards() {
  const interpretations = useTarotStore((state) => state.interpretations);
  return (
    <div className="all-cards">
      {interpretations.map((card, number) => (
        <StaticTarotCardContainer card={card} number={number} />
      ))}
    </div>
  );
}

export default AllCards;
