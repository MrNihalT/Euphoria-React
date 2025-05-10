import React, { useEffect, useState } from "react";
import data from "../data.json";
import rightArrow from "../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

function CategoriesMen(props) {
    const [Men, setMen] = useState([]);

    useEffect(() => {
        setMen(data.categories.men);
    }, []);

    return (
        <>
            <h3 className="new-arrivalt">
                <div></div>
                Categories For Men
            </h3>

            <div id="men-section" className="category-men">
                {Men.map((item, index) => (
                    <div key={index} className="category-item">
                        <Link to={`Items/${item.id}`}>
                            <img
                                src={require(`../assets/images/${item.image}`)}
                                alt={item.name}
                            />
                            <div className="c-i-bottom">
                                <div className="c-i-b-left">
                                    <p>{item.type}</p>
                                    <span>Explore Now</span>
                                </div>
                                <div className="c-i-b-right">
                                    <button>
                                        <img src={rightArrow} alt="" />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CategoriesMen;
