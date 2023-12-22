import React, { useState } from "react";
import { Helmet } from "react-helmet";
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
import { getCardUrl } from "../../utils/helpers";

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
      {/* TODO make this a component */}
      <Helmet>
        {/* HTML Meta Tags */}
        <meta
          name="description"
          content={interpretation.description[orientation]}
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={getCardUrl(number)} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Daily Tarot | ${title}`} />
        <meta
          property="og:description"
          content={interpretation.description[orientation]}
        />
        {/* <meta property="og:image" content="" /> */}
        <meta property="og:site_name" content="Daily Tarot" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tarot-tarot.netlify.app" />
        <meta property="twitter:url" content={getCardUrl(number)} />
        <meta name="twitter:title" content={`Daily Tarot | ${title}`} />
        <meta
          name="twitter:description"
          content={interpretation.description[orientation]}
        />
        {/* <meta name="twitter:image" content="" /> */}
      </Helmet>
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
