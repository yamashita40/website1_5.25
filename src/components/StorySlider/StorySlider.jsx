import { useEffect, useState } from "react";
import "./StorySlider.css";

const storySlides = [
  {
    id: 1,
    title: "用 AI 向金牌迈进",
    description:
      "Special Olympics 正在使用 Copilot，提供个性化训练方案和增强信心的工具，帮助运动员发挥更大潜力。",
    buttonText: "查看详情",
    image: "/images/story-olympics.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "AI 推动新的创造力",
    description:
      "了解企业如何利用 Microsoft AI 改进工作方式、提高效率，并创造新的发展机会。",
    buttonText: "查看详情",
    image: "/images/story-ai.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "科技让每个人都能参与",
    description:
      "通过包容性设计和智能工具，让更多用户能够轻松使用数字产品和服务。",
    buttonText: "查看详情",
    image: "/images/story-accessibility.jpg",
    href: "#",
  },
];

function StorySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlide((previousSlide) => {
        return (previousSlide + 1) % storySlides.length;
      });
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [isPlaying]);

  function showPreviousSlide() {
    setCurrentSlide((previousSlide) => {
      return (
        (previousSlide - 1 + storySlides.length) %
        storySlides.length
      );
    });
  }

  function showNextSlide() {
    setCurrentSlide((previousSlide) => {
      return (previousSlide + 1) % storySlides.length;
    });
  }

  function togglePlay() {
    setIsPlaying((previousValue) => !previousValue);
  }

  return (
    <section className="story-slider-section">
      <div className="story-slider-window">
        <div
          className="story-slider-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {storySlides.map((story) => (
            <article className="story-slide" key={story.id}>
              <a
                className="story-card"
                href={story.href}
              >
                <div className="story-card-content">
                  <h2>{story.title}</h2>

                  <p>{story.description}</p>

                  <span className="story-card-button">
                    {story.buttonText}
                  </span>
                </div>

                <div className="story-card-image-box">
                  <img
                    className="story-card-image"
                    src={story.image}
                    alt={story.title}
                  />
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="story-slider-controls">
        <div className="story-slider-arrows">
          <button
            type="button"
            className="story-slider-arrow"
            onClick={showPreviousSlide}
            aria-label="上一张"
          >
            ←
          </button>

          <button
            type="button"
            className="story-slider-arrow"
            onClick={showNextSlide}
            aria-label="下一张"
          >
            →
          </button>
        </div>

        <button
          type="button"
          className="story-slider-play"
          onClick={togglePlay}
          aria-label={isPlaying ? "暂停轮播" : "开始轮播"}
        >
          {isPlaying ? "■" : "▶"}
        </button>
      </div>
    </section>
  );
}

export default StorySlider;