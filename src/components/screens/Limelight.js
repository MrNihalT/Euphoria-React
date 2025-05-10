import React, { useEffect, useState, useContext } from "react";
import data from "../data.json";
import WishListBtn from "../assets/icons/wishlist.svg";
import { WishlistContext } from "../includes/WishlistContext";
import { Link } from "react-router-dom";

function Limelight() {
    const [limelight, setLimelight] = useState([]);
    const { wishlist, toggleWishlist } = useContext(WishlistContext);

    useEffect(() => {
        const items = data.the_limelight.featured_items;
        setLimelight(items);
    }, []);

    const isWishlisted = (item) => {
        return wishlist.some((w) => w.id === item.id);
    };

    return (
        <div id="limelight" className="limelight">
            <h3 className="new-arrivalt">
                <div></div>
                In The Limelight
            </h3>

            <div className="limelight-container">
                {limelight.map((item, index) => (
                    <div key={item.id} className="limelight-items">
                        <div className="top">
                            <Link to={`/Items/${item.id}`}>
                                <img
                                    src={require(`../assets/images/${item.image}`)}
                                    alt={item.name}
                                    className="main"
                                />
                            </Link>

                            <button
                                className="wishlist-btn"
                                onClick={() => toggleWishlist(item)}
                                style={{
                                    background: isWishlisted(item)
                                        ? "red"
                                        : "white",
                                }}
                            >
                                <img
                                    src={WishListBtn}
                                    alt="Wishlist"
                                    className="wishlist"
                                />
                            </button>
                        </div>
                        <div className="bottom">
                            <Link to={`Items/${item.id}`}>
                                <div className="limelight-bottom-l">
                                    <h3>{item.name}</h3>
                                    <p>{item.brand}</p>
                                </div>
                                <div className="limelight-bottom-r">
                                    <p>${item.price}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Limelight;
