import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import "./InterpretationContainer.css";
import { useTarotStore } from "../../store";
import Title from "../../components/Title/Title";
import Keywords from "../../components/Keywords/Keywords";
import Description from "../../components/Description/Description";
import Affirmation from "../../components/Affirmation/Affirmation";

function InterpretationContainer() {
  const card = useTarotStore((state) => state.card);
  const affirmation = useTarotStore((state) => state.getAffirmation)(card);
  const title = useTarotStore((state) => state.getTitle)(card);
  const keywords = useTarotStore((state) => state.getKeywords)(card);
  const description = useTarotStore((state) => state.getDescription)(card);
  const isInterpretationShowing = useTarotStore(
    (state) => state.isInterpretationShowing,
  );
  const { opacity, paddingTop } = useSpring({
    opacity: isInterpretationShowing ? 1 : 0,
    paddingTop: isInterpretationShowing ? "0" : "50px",
    config: config.molasses,
  });

  const style = {
    opacity,
    paddingTop,
  };

  return (
    <animated.div style={style}>
      <Affirmation affirmation={affirmation} />
      <Title title={title} isReversed={card.reversed} />
      <Keywords>{keywords}</Keywords>
      <Description>{description}</Description>
    </animated.div>
  );
}

export default InterpretationContainer;
