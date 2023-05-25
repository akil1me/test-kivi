import { useSwiper } from "swiper/react";

export const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <button onClick={() => swiper.slidePrev()}>prev</button>
      <button onClick={() => swiper.translateTo()}>next</button>
    </>
  );
};
