import React from "react";
import TarotCardImage from "../../components/TarotCardImage/TarotCardImage";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import "./ShowCard.css";
import { useParams, useNavigate } from "react-router-dom";
import { useTarotStore } from "../../store";
import Affirmations from "../../components/Affirmations/Affirmations";
import Title from "../../components/Title/Title";
import Keywords from "../../components/Keywords/Keywords";
import Description from "../../components/Description/Description";
import BackChevronLinkContainer from "../../containers/BackChevronLinkContainer/BackChevronLinkContainer";
import { parseOrientation, parseNum, getTitle } from "../../utils/helpers";
import { Interpretation } from "../../store/types";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ShowCardHeader from "../../components/ShowCardHeader/ShowCardHeader";

function ShowCard() {
  const navigate = useNavigate();
  const { cardNumber, cardOrientation } = useParams();
  const orientation = parseOrientation(cardOrientation);
  const number = parseNum(cardNumber, 78);
  const interpretation: Interpretation = useTarotStore(
    (state) => state.getInterpretation,
  )(number);
  const onClick = () => {
    const opposite = orientation === "reversed" ? "upright" : "reversed";
    navigate(`/cards/${number}/${opposite}`);
  };
  const title = getTitle(interpretation.name, orientation);

  return (
    <>
      <ShowCardHeader
        orientation={orientation}
        number={number}
        interpretation={interpretation}
      />
      <ScrollToTop />
      <TopNavigation>
        <BackChevronLinkContainer navigateTo="/cards" />
      </TopNavigation>
      <div onClick={onClick} className="show-card">
        <div className="show-tarot-card">
          <TarotCardImage number={number} orientation={orientation} />
        </div>
      </div>
      <div>
        <Affirmations affirmations={interpretation.affirmations[orientation]} />
        <Title title={title} />
        <Keywords>{interpretation.keywords[orientation]}</Keywords>
        <Description>{interpretation.description[orientation]}</Description>
      </div>
    </>
  );
}

export default ShowCard;
