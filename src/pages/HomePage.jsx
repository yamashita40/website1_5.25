import { useEffect, useState } from "react";

import "../App.css";
import "../styles/variables.css";

import MicrosoftHeader from "../components/MicrosoftHeader/MicrosoftHeader";
import AiSearch from "../components/AiSearch/AiSearch";
import ProductLinks from "../components/ProductLinks/ProductLinks";
import ProductCards from "../components/ProductCards/ProductCards";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct";
import BusinessCards from "../components/BusinessCards/BusinessCards";
import StorySlider from "../components/StorySlider/StorySlider";
import SocialFollow from "../components/SocialFollow/SocialFollow";
import Footer from "../components/Footer/Footer";

const homePageData = {
  announcement: {
    text: "限时优惠：Surface 套装特别活动进行中",
    linkText: "了解更多",
  },

  helpBox: {
    title: "Hi there. How can we help?",
    placeholder: "搜索产品、账户、订单或技术问题",
  },
  
};

const heroSlides = [
  {
    id: 1,
    title: "第一张商品展示图",
    className: "slide-one",
  },
  {
    id: 2,
    title: "第二张商品展示图",
    className: "slide-two",
  },
];

function HomePage() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);


  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);


 

  // 自动轮播
  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const slideTimer = setInterval(() => {
      setCurrentSlide((previousSlide) => {
        return (previousSlide + 1) % heroSlides.length;
      });
    }, 3000);

    return () => {
      clearInterval(slideTimer);
    };
  }, [isPlaying]);

  function goToPreviousSlide() {
    setCurrentSlide((previousSlide) => {
      return (
        (previousSlide - 1 + heroSlides.length) %
        heroSlides.length
      );
    });
  }

  function goToNextSlide() {
    setCurrentSlide((previousSlide) => {
      return (previousSlide + 1) % heroSlides.length;
    });
  }

  function toggleAutoPlay() {
    setIsPlaying((previousPlayingState) => {
      return !previousPlayingState;
    });
  }

  return (
    <div className="app">
      <MicrosoftHeader />

      

      {showAnnouncement && (
        <section className="announcement">
          <span>{homePageData.announcement.text}</span>

          <a href="#">
            {homePageData.announcement.linkText}
          </a>

          <button
            onClick={() => setShowAnnouncement(false)}
            aria-label="关闭公告"
          >
            ×
          </button>
        </section>
      )}

      <section className="wide-hero">
        <div
          className="hero-slider-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {heroSlides.map((slide) => (
            <div
              className={`hero-slide ${slide.className}`}
              key={slide.id}
            >
              <span>{slide.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="hero-controls">
        <button
          className="hero-arrow"
          onClick={goToPreviousSlide}
          aria-label="上一张"
        >
          ←
        </button>

        <div className="hero-control-center">
          <div className="hero-progress-list">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                className={
                  currentSlide === index
                    ? "hero-progress active"
                    : "hero-progress"
                }
                onClick={() => setCurrentSlide(index)}
                aria-label={`切换到第 ${index + 1} 张`}
              />
            ))}
          </div>

          <button
            className="hero-play-btn"
            onClick={toggleAutoPlay}
            aria-label={
              isPlaying ? "停止自动轮播" : "开始自动轮播"
            }
          >
            {isPlaying ? "■" : "▶"}
          </button>
        </div>

        <button
          className="hero-arrow"
          onClick={goToNextSlide}
          aria-label="下一张"
        >
          →
        </button>
      </section>

      <ProductLinks />

      <AiSearch />

      <ProductCards />

      <FeaturedProduct />

      <BusinessCards />

      <StorySlider />

      <SocialFollow />

      <Footer />

      {/* <section className="help-box">
        <h2>{homePageData.helpBox.title}</h2>

        <input
          placeholder={homePageData.helpBox.placeholder}
        />
      </section>*/}

      
    </div>
  );
}

export default HomePage;