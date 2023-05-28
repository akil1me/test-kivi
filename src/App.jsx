import { useRef } from "react";
import {
  Autoplay,
  FreeMode,
  Scrollbar,
  EffectCoverflow,
  EffectCreative,
  Parallax,
  Virtual,
  Zoom,
} from "swiper";
import "swiper/swiper-bundle.css";
import { Parallax as Par } from "react-parallax";

import "swiper/css";
import "swiper/css/free-mode";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "./app.css";
import "swiper/css/parallax";
import "swiper/css/zoom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { SwiperButtons } from "./swiper-buttons";
import { useEffect } from "react";
import { motion } from "framer-motion";

const arr = [
  {
    title: "Home",
    delay: 0,
  },
  {
    title: "About-us",
    delay: 0.2,
  },
  {
    title: "Contact",
    delay: 0.4,
  },
  {
    title: "Works",
    delay: 0.5,
  },
];

const App = () => {
  const swiperRef = useRef(null);
  const slides = Array.from({ length: 10 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  const handleScroll = () => {
    swiperRef.current.translateTo(-1 * window.scrollY);
  };

  const obg = {
    allowTouchMove: true,
    followFinger: true,
    grabCursor: true,
    lazy: false,
    longSwipesRatio: 0.35,
    parallax: true,
    passiveListeners: true,
    preloadImages: false,
    preventInteractionOnTransition: true,
    roundLengths: false,
    freeMode: true,
    speed: 360,
    touchMoveStopPropagation: true,
    virtual: true,
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className="nav">
        {arr.map((e, i) => (
          <motion.div
            key={i}
            className="element"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: e.delay }}
          >
            {e.title.split("").map((e, i) => (
              <span key={i}>{e}</span>
            ))}
          </motion.div>
        ))}
      </nav>

      <div className="swiper1" style={{ height: 1000 }}>
        <Swiper
          className="swiper-rotate"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[
            Zoom,
            FreeMode,
            EffectCoverflow,
            EffectCreative,
            Parallax,
            Virtual,
          ]}
          zoom
          freeMode
          loopedSlides={8}
          parallax={true}
          coverflowEffect={{
            rotate: 5,
          }}
          style={{ width: "100%" }}
          spaceBetween={20}
          slidesPerView={"auto"}
          speed={1000}
          autoplay={false}
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide
              className="rota"
              key={slideContent}
              style={{
                width: 600,
                height: 600,
                borderRadius: 60,
                overflow: "hidden",
                background: "red",
              }}
            >
              <img
                data-swiper-parallax="10%"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 60,
                  // objectFit: "cover",
                }}
                src={`https://picsum.photos/id/${index + 20}/600/600`}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <button onClick={() => swiperRef.current.slideNext()}>
        Go to Next Slide
      </button> */}
      </div>
    </>
  );
};

export default App;
