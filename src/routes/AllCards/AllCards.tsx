import "./AllCards.css";
import { useTarotStore } from "../../store";
import StaticTarotCardContainer from "../../containers/StaticTarotCardContainer/StaticTarotCardContainer";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import BackChevronLinkContainer from "../../containers/BackChevronLinkContainer/BackChevronLinkContainer";

function AllCards() {
  const interpretations = useTarotStore((state) => state.interpretations);
  return (
    <div className="all-cards">
      <TopNavigation>
        <BackChevronLinkContainer />
      </TopNavigation>
      {interpretations.map((card, number) => (
        <StaticTarotCardContainer
          key={`${number}${card.name}`}
          card={card}
          number={number}
        />
      ))}
    </div>
  );
}

export default AllCards;
