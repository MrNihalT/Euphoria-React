import React, { useEffect, useState } from "react";
import data from "../data.json";

function Feedback() {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        setFeedback(data.reviews);
    }, []);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(feedback.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalPages]);

    const startIndex = currentPage * itemsPerPage;
    const visibleItems = feedback.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="feedback-section">
            <h3 className="new-arrivalt">
                <div></div>
                Feedback
            </h3>

            <div className="feedbacks">
                {visibleItems.map((item, index) => (
                    <div key={index} className="feedback-items">
                        <div className="feedback-top">
                            <div className="left">
                                <img
                                    src={require(`../assets/icons/${item.image}`)}
                                    alt=""
                                />
                                <h3>{item.user}</h3>
                            </div>
                            <div className="right">
                                {[...Array(5)].map((_, i) => {
                                    const fullStars = Math.floor(item.rating);
                                    const hasHalfStar = item.rating % 1 !== 0;

                                    let starType;
                                    if (i < fullStars) {
                                        starType = "star.svg";
                                    } else if (i === fullStars && hasHalfStar) {
                                        starType = "star_half.svg";
                                    } else {
                                        starType = "star_outline.svg";
                                    }

                                    return (
                                        <img
                                            key={i}
                                            src={require(`../assets/icons/${starType}`)}
                                            alt=""
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="feedback-bottom">
                            <p>{item.comment}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="scroll">
                {[...Array(totalPages)].map((_, i) => (
                    <div
                        key={i}
                        className={`scroll-i ${
                            i === currentPage ? "active-i" : ""
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Feedback;
