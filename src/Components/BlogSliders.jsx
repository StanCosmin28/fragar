// import React from "react";

// const blogData = [
//   {
//     id: 1,
//     title: "Minimal Design Trends",
//     image: "https://picsum.photos/400/300?random=1",
//     excerpt: "Exploring the latest in clean, modern aesthetics.",
//   },
//   {
//     id: 2,
//     title: "Tech Innovations 2025",
//     image: "https://picsum.photos/400/300?random=2",
//     excerpt: "What's next for cutting-edge technology.",
//   },
//   {
//     id: 3,
//     title: "Sustainable Living",
//     image: "https://picsum.photos/400/300?random=3",
//     excerpt: "Eco-friendly practices for a better future.",
//   },
//   {
//     id: 4,
//     title: "Urban Adventures",
//     image: "https://picsum.photos/400/300?random=4",
//     excerpt: "Discovering hidden gems in the city.",
//   },
// ];

// const BlogCard1 = ({ title, image, excerpt, isActive }) => (
//   <div
//     className={`slider-card w-80 mx-4 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
//       isActive ? "active" : ""
//     }`}
//   >
//     <img src={image} alt={title} className="w-full h-48 object-cover" />
//     <div className="p-6">
//       <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//       <p className="text-gray-600 text-sm">{excerpt}</p>
//       <button className="mt-4 text-indigo-600 font-medium hover:underline">
//         Read More
//       </button>
//     </div>
//   </div>
// );

// const BlogCard2 = ({ title, image, excerpt, isActive }) => (
//   <div
//     className={`slider-card w-80 mx-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl overflow-hidden transition-all duration-300 ${
//       isActive ? "active" : ""
//     }`}
//   >
//     <img
//       src={image}
//       alt={title}
//       className="w-full h-40 object-cover opacity-80"
//     />
//     <div className="p-6">
//       <h3 className="text-lg font-bold mb-2">{title}</h3>
//       <p className="text-gray-300 text-sm">{excerpt}</p>
//       <button className="mt-4 text-yellow-400 font-medium hover:underline">
//         Read More
//       </button>
//     </div>
//   </div>
// );

// const BlogCard3 = ({ title, image, excerpt, isActive }) => (
//   <div
//     className={`slider-card w-80 mx-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
//       isActive ? "active" : ""
//     }`}
//   >
//     <div className="relative">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-56 object-cover rounded-t-lg"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all duration-300"></div>
//     </div>
//     <div className="p-6">
//       <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-700 text-sm">{excerpt}</p>
//       <button className="mt-4 text-green-600 font-medium hover:underline">
//         Read More
//       </button>
//     </div>
//   </div>
// );

// const Slider = ({ children }) => {
//   const [currentIndex, setCurrentIndex] = React.useState(0);
//   const cardWidth = 352; // 320px card + 32px margin (16px each side)
//   const totalCards = React.Children.count(children);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalCards);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
//   };

//   const handleSwipe = (e) => {
//     const startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
//     const handleEnd = (endE) => {
//       const endX =
//         endE.type === "touchend"
//           ? endE.changedTouches[0].clientX
//           : endE.clientX;
//       if (startX - endX > 50) nextSlide();
//       if (endX - startX > 50) prevSlide();
//     };
//     if (e.type === "touchstart") {
//       document.addEventListener("touchend", handleEnd, { once: true });
//     } else {
//       document.addEventListener("mouseup", handleEnd, { once: true });
//     }
//   };

//   return (
//     <div className="slider-container relative w-full max-w-7xl mx-auto py-8">
//       <div
//         className="nav-arrow left-0 rounded-r-lg bg-gray-800 text-white px-4 py-2 cursor-pointer absolute top-1/2 transform -translate-y-1/2 z-10 hover:bg-gray-900"
//         onClick={prevSlide}
//       >
//         ←
//       </div>
//       <div
//         className="slider-track flex"
//         style={{
//           transform: `translateX(-${currentIndex * cardWidth}px)`,
//           transition: "transform 0.5s ease",
//         }}
//         onTouchStart={handleSwipe}
//         onMouseDown={handleSwipe}
//       >
//         {React.Children.map(children, (child, index) =>
//           React.cloneElement(child, { isActive: index === currentIndex })
//         )}
//       </div>
//       <div
//         className="nav-arrow right-0 rounded-l-lg bg-gray-800 text-white px-4 py-2 cursor-pointer absolute top-1/2 transform -translate-y-1/2 z-10 hover:bg-gray-900"
//         onClick={nextSlide}
//       >
//         →
//       </div>
//     </div>
//   );
// };

// const BlogSliders = () => (
//   <div className="min-h-screen py-12">
//     {/* Section 1: Clean and Bright */}
//     <section className="section-1 mb-16">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         Featured Stories
//       </h2>
//       <Slider>
//         {blogData.map((blog) => (
//           <BlogCard1 key={blog.id} {...blog} />
//         ))}
//       </Slider>
//     </section>

//     {/* Section 2: Dark and Bold */}
//     <section className="section-2 mb-16">
//       <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
//         Tech Insights
//       </h2>
//       <Slider>
//         {blogData.map((blog) => (
//           <BlogCard2 key={blog.id} {...blog} />
//         ))}
//       </Slider>
//     </section>

//     {/* Section 3: Artistic and Subtle */}
//     <section className="section-3">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         Lifestyle Picks
//       </h2>
//       <Slider>
//         {blogData.map((blog) => (
//           <BlogCard3 key={blog.id} {...blog} />
//         ))}
//       </Slider>
//     </section>
//   </div>
// );

// export default BlogSliders;
