import React from "react";
import "./BackChevronLinkContainer.css";
import { useNavigate } from "react-router-dom";
import BackChevron from "../../components/BackChevron/BackChevron";

function BackChevronLinkContainer() {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <div onClick={handleClick}>
      <BackChevron />
    </div>
  );
}

export default BackChevronLinkContainer;
