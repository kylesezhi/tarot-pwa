import React from "react";
import "./ShareButtonContainer.css";
import { useTarotStore } from "../../store";
import ShareButton from "../../components/ShareButton/ShareButton";

function ShareButtonContainer() {
  const isInterpretationShowing = useTarotStore(
    (state) => state.isInterpretationShowing,
  );
  const description = useTarotStore((state) => state.getDescription)();
  const affirmation = useTarotStore((state) => state.getAffirmation)();
  const title = useTarotStore((state) => state.getTitle)();

  const data = { text: `${title} | "${affirmation}" | ${description}`, title };
  const canShare =
    isInterpretationShowing && navigator.canShare && navigator.canShare(data);

  const onClick = async () => {
    if (!canShare) {
      return;
    }
    try {
      await navigator.share(data);
    } catch (e) {
      console.error(e);
    }
  };

  const style = {
    cursor: canShare ? "pointer" : "auto",
  };

  return (
    <div onClick={onClick} className="share-button-container" style={style}>
      <ShareButton show={canShare} />
    </div>
  );
}

export default ShareButtonContainer;