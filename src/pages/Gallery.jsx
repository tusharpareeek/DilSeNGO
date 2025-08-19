import { useState } from "react";

export default function Gallery() {
  const photos = [
    "/images/ngo1.jpg",
    "/images/ngo2.jpg",
    "/images/ngo3.jpg",
    "/images/ngo4.jpg",
    "/images/ngo5.jpg"
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  return (
    <section className="slideshow">
      <h2>Our Work in Pictures</h2>
      <div className="slideshow-container">
        <button className="nav-btn prev" onClick={prevSlide}>❮</button>

        <img
          src={photos[current]}
          alt={`NGO activity ${current + 1}`}
          className="slide"
        />

        <button className="nav-btn next" onClick={nextSlide}>❯</button>
      </div>

      <div className="dots">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
