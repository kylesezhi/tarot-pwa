import React, { useState } from "react";
import TarotCardImage from "../../components/TarotCardImage/TarotCardImage";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import BackChevronButtonContainer from "../../containers/BackChevronButtonContainer/BackChevronButtonContainer";
import { Orientation, parseNum } from "../../utils/helpers";
import "./ShowCard.css";
import { useParams } from "react-router-dom";
import { useTarotStore } from "../../store";
import Affirmation from "../../components/Affirmation/Affirmation";
import Title from "../../components/Title/Title";
import Keywords from "../../components/Keywords/Keywords";
import Description from "../../components/Description/Description";

function ShowCard() {
  const [orientation, setOrientation] = useState<Orientation>("upright");
  const number = parseNum(useParams().cardNumber, 78);
  const interpretation = useTarotStore((state) => state.getInterpretation)(
    number,
  );
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
        {/* TODO show all affirmations */}
        <Affirmation
          affirmation={interpretation.affirmations[orientation][0]}
        />
        <Title title={interpretation.name} />
        <Keywords>{interpretation.keywords[orientation]}</Keywords>
        <Description>{interpretation.description[orientation]}</Description>
      </div>
    </>
  );
}

export default ShowCard;
