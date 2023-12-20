import React from "react";
import "./ShareButtonContainer.css";
import { useTarotStore } from "../../store";
import ShareButton from "../../components/ShareButton/ShareButton";

function ShareButtonContainer() {
  const isInterpretationShowing = useTarotStore(
    (state) => state.isInterpretationShowing,
  );
  const description = useTarotStore((state) => state.getDescription)();
  const title = useTarotStore((state) => state.getTitle)();

  const data = { text: description, title };
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

  return (
    <div onClick={onClick} className="share-button-container">
      <ShareButton show={canShare} />
    </div>
  );
}

export default ShareButtonContainer;
