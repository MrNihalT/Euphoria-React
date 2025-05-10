import React, { useEffect, useRef, useState } from "react";
import data from "../data.json";
import leftArrow from "../assets/icons/arrow-left.svg";
import rightArrow from "../assets/icons/arrow-right.svg";

function NewArrival() {
    const [newArrival, setNewArrival] = useState([]);

    useEffect(() => {
        setNewArrival(data.new_arrivals);
    }, []);

    // console.log(newArrival);

    const collectionRef = useRef(null);
    const scrollAmount = 500;

    const scrollLeft = () => {
        if (collectionRef.current) {
            collectionRef.current.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (collectionRef.current) {
            collectionRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="new-arrival">
            <button className="new-arrival-left" onClick={scrollLeft}>
                <img src={leftArrow} alt="Left Arrow" />
            </button>

            <div className="new-arrival-collection" ref={collectionRef}>
                {newArrival.map((item, index) => (
                    <div key={index} className="new-arrival-item">
                        <a href="#">
                            <img
                                src={require(`../assets/images/${item.image}`)}
                                alt={item.name}
                            />
                            <h3>{item.name}</h3>
                        </a>
                    </div>
                ))}
            </div>

            <button className="new-arrival-right" onClick={scrollRight}>
                <img src={rightArrow} alt="Right Arrow" />
            </button>
        </div>
    );
}

export default NewArrival;
