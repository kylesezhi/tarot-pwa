import React from "react";
import "./ShareButtonContainer.css";
import { useTarotStore } from "../../store";
import ShareButton from "../../components/ShareButton/ShareButton";

function ShareButtonContainer() {
  const isInterpretationShowing = useTarotStore(
    (state) => state.isInterpretationShowing,
  );
  const interpretation = useTarotStore((state) => state.interpretation);
  const card = useTarotStore((state) => state.card);

  const data = {
    title: interpretation.name,
    text: interpretation.affirmation,
    url: `${window.location.origin}/card/${card.number}`,
  };
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
