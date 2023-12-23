import React from "react";
import { Helmet } from "react-helmet";
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
import { getCardUrl, parseOrientation, parseNum } from "../../utils/helpers";
import { Interpretation } from "../../store/types";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function ShowCard() {
  const navigate = useNavigate();
  const { cardNumber, cardOrientation } = useParams();
  const orientation = parseOrientation(cardOrientation);
  const number = parseNum(cardNumber, 78);
  const interpretation: Interpretation = useTarotStore(
    (state) => state.getInterpretation,
  )(number);
  const onClick = () => {
    if (orientation === "upright") {
      navigate(`/cards/${number}/reversed`);
    } else {
      navigate(`/cards/${number}/upright`);
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
        <meta property="og:url" content={getCardUrl(number, orientation)} />
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
        <meta
          property="twitter:url"
          content={getCardUrl(number, orientation)}
        />
        <meta name="twitter:title" content={`Daily Tarot | ${title}`} />
        <meta
          name="twitter:description"
          content={interpretation.description[orientation]}
        />
        {/* <meta name="twitter:image" content="" /> */}
      </Helmet>
      <ScrollToTop />
      <TopNavigation>
        <BackChevronLinkContainer />
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
