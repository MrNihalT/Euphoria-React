import React, { useEffect, useRef, useState } from "react";
import bg1 from "../assets/images/bg-1.jpg";
import bg2 from "../assets/images/bg-2.jpg";
import bg3 from "../assets/images/bg-3.jpg";
import bg4 from "../assets/images/bg-4.jpg";
import leftArrow from "../assets/icons/left-arrow-bold.svg";
import rightArrow from "../assets/icons/right-arrow-bold.svg";

const Spotlight = () => {
    const slides = [bg1, bg2, bg3, bg4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    useEffect(() => {
        slideInterval.current = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(slideInterval.current);
    }, []);

    const slidePercentage = ((currentIndex + 1) / slides.length) * 100;

    const slideContent = [
        {
            title: "Summer Value Pack",
            subtitle: "T-Shirt / Tops",
            tags: "cool / colorful / comfy",
        },
        {
            title: "Stylish Collection",
            subtitle: "Casual Wear",
            tags: "trendy / modern / fresh",
        },
        {
            title: "Denim classics",
            subtitle: "Denim / Jeans",
            tags: "rugged / stylish / durable",
        },
        {
            title: "Denim classics",
            subtitle: "Denim / Jeans",
            tags: "rugged / stylish / durable",
        },
    ];

    return (
        <section id="spotlight">
            <div className="spotlight-slider">
                <button className="left-arrow" onClick={prevSlide}>
                    <img src={leftArrow} alt="Left Arrow" />
                </button>

                <div className="spotlight-content">
                    {slides.map((bg, i) => (
                        <div
                            key={i}
                            className={`slide ${
                                i === currentIndex ? "active" : ""
                            }`}
                            style={{ backgroundImage: `url(${bg})` }}
                        >
                            <h3>{slideContent[i].subtitle}</h3>
                            <h1>{slideContent[i].title}</h1>
                            <p className="spotlight-items">
                                {slideContent[i].tags}
                            </p>
                            <button className="shop-now">Shop Now</button>
                        </div>
                    ))}
                </div>

                <button className="right-arrow" onClick={nextSlide}>
                    <img src={rightArrow} alt="Right Arrow" />
                </button>

                <div className="slider-dots">
                    <div
                        className="slide-percentage"
                        style={{ width: `${slidePercentage}%` }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Spotlight;
