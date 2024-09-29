import { useState } from "react";
import "./BookList.css";

export default function BookList({ sectionLabel, books }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex < books.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className="section-book">
      <h2 className="section-header">{sectionLabel}</h2>
      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${-slideIndex * 100}%)`,
          }}
        >
          {books.map((elem) => (
            <div key={elem.key} className="book-item">
              <img
                width={200}
                src={`https://covers.openlibrary.org/b/id/${elem.cover_i}.jpg`}
                alt={elem.title}
              />
              <div className="book-info">
                {elem.title} - {elem.author_name && elem.author_name[0]}
              </div>
            </div>
          ))}
        </div>
        <button
          className="w3-button w3-black w3-display-left"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="w3-button w3-black w3-display-right"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
