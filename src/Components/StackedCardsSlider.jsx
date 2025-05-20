import { useState } from "react";

function StackedCardsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Clădire Administrativă Smart",
      excerpt:
        "Un sediu instituțional modern cu sisteme de automatizare energetică și senzori IoT.",
      image:
        "https://images.unsplash.com/photo-1635950574717-a0e150ee34bb?q=80&w=3576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Arhitectură Instituțională",
      date: "Iunie 2024",
    },
    {
      id: 2,
      title: "Parc Urban Ecologic",
      excerpt:
        "Un parc public cu iluminat solar și zone interactive pentru comunitate.",
      image:
        "https://plus.unsplash.com/premium_photo-1673483585941-fe3535a0b04f?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Spații Publice",
      date: "Martie 2025",
    },
    {
      id: 3,
      title: "Centru Industrial Inteligent",
      excerpt:
        "O facilitate industrială dotată cu tehnologie de monitorizare în timp real.",
      image:
        "https://images.unsplash.com/photo-1643175517565-2d355888e0fd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Industrie Smart",
      date: "Noiembrie 2024",
    },
    {
      id: 4,
      title: "Campus Educațional Verde",
      excerpt:
        "O clădire educațională cu panouri solare și sisteme de reciclare integrate.",
      image:
        "https://images.unsplash.com/photo-1635191048419-47590846219d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Educație",
      date: "August 2024",
    },
    {
      id: 5,
      title: "Parc Tehnologic Urban",
      excerpt:
        "Un spațiu public cu stații de încărcare electrică și Wi-Fi gratuit.",
      image:
        "https://plus.unsplash.com/premium_photo-1673453455523-7390933a58f2?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Tehnologie Urbană",
      date: "Mai 2025",
    },
  ];

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
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
    return (currentIndex + index) % projects.length;
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
          const post = projects[index];

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
              <div className="h-full bg-white rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#F42223]/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-[#2691EA] text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <p className="text-sm mt-2">{post.date}</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3 text-oklch">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <button className="self-start relative overflow-hidden group px-6 py-3 rounded-lg bg-[#2691EA] text-white font-medium md:mx-0 mx-auto">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                      Citește mai mult
                    </span>
                    <span className="absolute inset-0 bg-[#F42223] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {projects.map((_, index) => (
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
    <section className="container py-12 px-4 sm:px-6 lg:px-8 bg-oklch/10 mx-auto">
      <div className="max-w-[1560px] mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-oklch mb-4 text-red-500">
          PROIECTE
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-3xl">
          Am contribuit la dezvoltarea unor clădiri instituționale, parcuri
          publice și spații industriale dotate cu tehnologie smart.
        </p>
        <button className="mb-8 px-6 py-3 rounded-lg bg-[#2691EA] text-white font-medium hover:bg-[#F42223] transition-colors duration-300">
          Vezi toate proiectelel
        </button>
        <StackedCardsSlider />
      </div>
    </section>
  );
}

export default ProjectsSection;
