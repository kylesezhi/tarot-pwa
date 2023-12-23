import React from "react";
import "./BackChevronLinkContainer.css";
import { useNavigate } from "react-router-dom";
import BackChevron from "../../components/BackChevron/BackChevron";

interface BackChevronLinkContainerProps {
  navigateTo: string;
}

function BackChevronLinkContainer({
  navigateTo,
}: BackChevronLinkContainerProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <div onClick={handleClick}>
      <BackChevron />
    </div>
  );
}

export default BackChevronLinkContainer;
