import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import "./InterpretationContainer.css";
import { useTarotStore } from "../../store";
import Title from "../../components/Title/Title";
import Keywords from "../../components/Keywords/Keywords";
import Description from "../../components/Description/Description";
import Affirmation from "../../components/Affirmation/Affirmation";

function InterpretationContainer() {
  const affirmation = useTarotStore((state) => state.getAffirmation)();
  const title = useTarotStore((state) => state.getTitle)();
  const keywords = useTarotStore((state) => state.getKeywords)();
  const description = useTarotStore((state) => state.getDescription)();
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
      <Title title={title} />
      <Keywords>{keywords}</Keywords>
      <Description>{description}</Description>
    </animated.div>
  );
}

export default InterpretationContainer;
