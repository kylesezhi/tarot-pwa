import TarotCardImage from "../../components/TarotCardImage/TarotCardImage";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import BackChevronButtonContainer from "../../containers/BackChevronButtonContainer/BackChevronButtonContainer";
import { parseNum } from "../../utils/helpers";
import "./ShowCard.css";
import { useParams } from "react-router-dom";
// import { useTarotStore } from "../../store";

function ShowCard() {
  const { cardNumber } = useParams();
  const number = parseNum(cardNumber, 78);
  return (
    <div className="show-card">
      <TopNavigation>
        <BackChevronButtonContainer />
      </TopNavigation>
      <TarotCardImage number={number} />
    </div>
  );
}

export default ShowCard;
