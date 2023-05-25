import { useRef } from "react";
import { Autoplay, FreeMode, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import "./app.css";
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
    delay: 0.1,
  },
  {
    title: "Contact",
    delay: 0.2,
  },
  {
    title: "Works",
    delay: 0.3,
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
            transition={{ duration: 0.5, delay: e.delay }}
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
          modules={[FreeMode]}
          loop
          freeMode
          style={{ width: "100%" }}
          spaceBetween={50}
          slidesPerView={"auto"}
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide
              className="rota"
              key={slideContent}
              style={{
                width: 600,
                height: 600,
                backgroundColor: "blue",
                borderRadius: 20,
              }}
            >
              {slideContent}
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
