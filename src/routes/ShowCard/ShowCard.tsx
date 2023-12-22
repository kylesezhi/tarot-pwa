import React, { useState } from "react";
import TarotCardImage from "../../components/TarotCardImage/TarotCardImage";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import { Orientation, parseNum } from "../../utils/helpers";
import "./ShowCard.css";
import { useParams } from "react-router-dom";
import { useTarotStore } from "../../store";
import Affirmation from "../../components/Affirmation/Affirmation";
import Title from "../../components/Title/Title";
import Keywords from "../../components/Keywords/Keywords";
import Description from "../../components/Description/Description";
import BackChevronLinkContainer from "../../containers/BackChevronLinkContainer/BackChevronLinkContainer";

function ShowCard() {
  const [orientation, setOrientation] = useState<Orientation>("upright");
  const number = parseNum(useParams().cardNumber, 78);
  const interpretation = useTarotStore((state) => state.getInterpretation)(
    number,
  );
  const onClick = () => {
    if (orientation === "upright") {
      setOrientation("reversed");
    } else {
      setOrientation("upright");
    }
  };
  const title = `${orientation === "reversed" ? "Reversed " : ""}${
    interpretation.name
  }`;

  return (
    <>
      <div onClick={onClick} className="show-card">
        <TopNavigation>
          <BackChevronLinkContainer />
        </TopNavigation>
        <div className="show-tarot-card">
          <TarotCardImage
            number={number}
            reversed={orientation === "reversed"}
          />
        </div>
      </div>
      <div>
        <Affirmation
          affirmation={interpretation.affirmations[orientation][0]}
        />
        <Title title={title} />
        <Keywords>{interpretation.keywords[orientation]}</Keywords>
        <Description>{interpretation.description[orientation]}</Description>
      </div>
    </>
  );
}

export default ShowCard;
