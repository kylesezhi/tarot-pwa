import TarotCardImage from "../../components/TarotCardImage/TarotCardImage";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import BackChevronButtonContainer from "../../containers/BackChevronButtonContainer/BackChevronButtonContainer";
import { parseNum } from "../../utils/helpers";
import "./ShowCard.css";
import { useParams } from "react-router-dom";
import { useTarotStore } from "../../store";
import Affirmation from "../../components/Affirmation/Affirmation";
import Title from "../../components/Title/Title";
import Keywords from "../../components/Keywords/Keywords";
import Description from "../../components/Description/Description";

function ShowCard() {
  // TODO figure this out using Interpretation - we have to show all the content
  const { cardNumber } = useParams();
  const number = parseNum(cardNumber, 78);
  const upright = { number, reversed: false };
  const affirmation = useTarotStore((state) => state.getAffirmation)(upright);
  const title = useTarotStore((state) => state.getTitle)(upright);
  const keywords = useTarotStore((state) => state.getKeywords)(upright);
  const description = useTarotStore((state) => state.getDescription)(upright);
  return (
    <>
      <div className="show-card">
        <TopNavigation>
          <BackChevronButtonContainer />
        </TopNavigation>
        <div className="show-tarot-card">
          <TarotCardImage number={number} />
        </div>
      </div>
      <div>
        <Affirmation affirmation={affirmation} />
        <Title title={title} />
        <Keywords>{keywords}</Keywords>
        <Description>{description}</Description>
      </div>
    </>
  );
}

export default ShowCard;
