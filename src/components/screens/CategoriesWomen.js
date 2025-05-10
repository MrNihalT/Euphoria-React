import React, { useEffect, useState } from "react";
import ArrowRight from "../assets/icons/arrow-right.svg";
import data from "../data.json";
import { Link } from "react-router-dom";

function CategoriesWomen(props) {
    const [Women, setWomen] = useState([]);

    useEffect(() => {
        setWomen(data.categories.women);
    }, []);

    return (
        <>
            <h3 className="new-arrivalt">
                <div></div>
                Categories For Women
            </h3>
            <div id="women-section" className="category-women">
                {Women.map((item, index) => (
                    <div key={index} className="category-item">
                        <Link to={`Items/${item.id}`}>
                            <img
                                src={require(`../assets/images/${item.image}`)}
                                alt={item.name}
                            />
                            <div className="c-i-bottom">
                                <div className="c-i-b-left">
                                    <p>{item.name}</p>
                                    <span>Explore Now</span>
                                </div>
                                <div className="c-i-b-right">
                                    <button>
                                        <img src={ArrowRight} alt="" />
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

export default CategoriesWomen;
