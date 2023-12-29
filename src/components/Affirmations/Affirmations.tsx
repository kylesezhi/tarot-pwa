import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Affirmation from "../Affirmation/Affirmation";

interface AffirmationProps {
  affirmations: Array<string>;
}

function Affirmations({ affirmations }: AffirmationProps) {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {affirmations.map((affirmation) => (
        <SwiperSlide key={affirmation}>
          <Affirmation affirmation={affirmation} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Affirmations;
