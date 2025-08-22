import { useState } from "react";
import stackProjectsData from "../Model/stackProjectsData";

function StackedCardsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stackProjectsData.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + stackProjectsData.length) % stackProjectsData.length
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  const getCardIndex = (index) => {
    return (currentIndex + index) % stackProjectsData.length;
  };

  return (
    <div className="relative h-[550px] md:h-[450px] w-full">
      <div
        className="absolute md:top-1/2 bottom-8 left-4 z-20 md:-translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-all duration-300"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#2691EA]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <div
        className="absolute md:top-1/2 bottom-8 right-4 z-20 md:-translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-all duration-300"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#2691EA]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      <div
        className="relative h-full w-full max-w-7xl mx-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {[0, 1, 2].map((offset) => {
          const index = getCardIndex(offset);
          const post = stackProjectsData[index];

          const zIndex = 10 - offset;
          const opacity = 1 - offset * 0.2;
          const scale = 1 - offset * 0.05;
          const translateY = offset * 20;

          return (
            <div
              key={post.id}
              className={`absolute inset-0 transition-all duration-500 ease-out rounded-xl overflow-hidden shadow-2xl`}
              style={{
                zIndex,
                opacity,
                transform: `translateY(${translateY}px) scale(${scale})`,
              }}
            >
              <div className="h-full bg-white rounded-xl overflow-hidden flex flex-col md:flex-row cursor-pointer">
                <div className="md:w-1/2 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#F42223]/30 to-transparent"></div> */}
                  <div className="absolute bottom-4 left-4 text-white">
                    {/* <span className="bg-[#2691EA] text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
                      {post.category}
                    </span> */}
                    <p className="text-sm mt-2">{post.date}</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3 text-oklch">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  {/* <button className="cursor-pointer hover:scale-105 transition-all duration-600 self-start relative overflow-hidden group px-6 py-3 rounded-lg bg-[#2691EA] text-white font-medium md:mx-0 mx-auto">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                      Citește mai mult
                    </span>
                    <span className="absolute inset-0 bg-[#F42223] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                  </button> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {stackProjectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-[#2691EA] w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="container py-12 px-4 sm:px-6 lg:px-8 bg-oklch/10 mx-auto my-25"
    >
      <div className="max-w-[1560px] mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-oklch mb-4 text-red-500">
          PROIECTE
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-xl">
          Am contribuit la dezvoltarea unor clădiri instituționale, parcuri
          publice și spații industriale dotate cu tehnologie smart.
        </p>
        {/* <a href="/fragar/proiecte">
          <button className="cursor-pointer mb-8 px-6 py-3 rounded-lg bg-[#2691EA] text-white font-medium hover:bg-[#F42223] transition-colors duration-250">
            Vezi toate proiectelel
          </button>
        </a> */}
        <StackedCardsSlider />
      </div>
    </section>
  );
}

export default ProjectsSection;
