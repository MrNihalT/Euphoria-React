import React, { useEffect, useState, useContext } from "react";
import data from "../data.json";
import { useParams, Link } from "react-router-dom";
import Footer from "../includes/Footer";
import Header from "../includes/Header";
import { WishlistContext } from "../includes/WishlistContext";
import { CartContext } from "../includes/CartContext";
import WishListBtn from "../assets/icons/wishlist.svg";

function Items() {
    const [item, setItem] = useState(null);
    const [similarItems, setSimilarItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const { wishlist, toggleWishlist } = useContext(WishlistContext);
    const { cart, toggleCart } = useContext(CartContext);
    const { id } = useParams();

    useEffect(() => {
        // Find the current item from data.json by ID
        const allItems = [
            ...data.categories.men,
            ...data.categories.women,
            ...data.the_limelight.featured_items,
        ];

        const selectedItem = allItems.find((item) => item.id === parseInt(id));
        setItem(selectedItem);
        // console.log(selectedItem);
        // console.log(item);

        if (selectedItem) {
            const similar = allItems.filter(
                (i) =>
                    i.category === selectedItem.category &&
                    i.id !== selectedItem.id
            );
            setSimilarItems(similar);
        }
    }, [id]);

    const isWishlisted = (item) => {
        return wishlist.some((w) => w.id === item.id);
    };

    const handleNext = () => {
        if (similarItems.length === 0) return;
        const nextindex = (currentIndex + 1) % similarItems.length;
        setCurrentIndex(nextindex);
        setItem(similarItems[nextindex]);
    };
    const handleprevious = () => {
        if (similarItems.length === 0) return;
        const prevIndex =
            (currentIndex - 1 + similarItems.length) % similarItems.length;
        setCurrentIndex(prevIndex);
        setItem(similarItems[prevIndex]);
    };

    if (!item) return <div>Loading...</div>;

    return (
        <>
            <Header />
            <section id="product-section">
                <div className="product-left">
                    <div className="product-images">
                        {similarItems
                            .slice(currentIndex, currentIndex + 3)
                            .map((simItem, index) => (
                                <div className="image-products">
                                    <button
                                        onClick={() => {
                                            setCurrentIndex(index);
                                            setItem(simItem);
                                        }}
                                        className="product-list-btn"
                                    >
                                        <img
                                            src={require(`../assets/images/${simItem.image}`)}
                                            alt=""
                                        />
                                    </button>
                                </div>
                            ))}
                    </div>
                    <div className="product-button">
                        <button onClick={handleprevious} className="up-button">
                            <img
                                src={
                                    require("../assets/icons/left (Stroke).svg")
                                        .default
                                }
                                alt=""
                            />
                        </button>
                        <button onClick={handleNext} className="down-arrow">
                            <img
                                src={
                                    require("../assets/icons/left (Stroke) (1).svg")
                                        .default
                                }
                                alt=""
                            />
                        </button>
                    </div>
                </div>

                <div className="product-middle">
                    <img
                        src={require(`../assets/images/${item.image}`)}
                        alt=""
                    />
                </div>

                <div className="product-right">
                    <div className="product-top">
                        <ul>
                            <li>
                                <a href="">
                                    Shop
                                    <img
                                        src={
                                            require("../assets/icons/right-arrow-light.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Women
                                    <img
                                        src={
                                            require("../assets/icons/right-arrow-light.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">Top</a>
                            </li>
                        </ul>
                    </div>

                    <h3 className="product-name">{item.name}</h3>

                    <div className="product-rating">
                        {[...Array(5)].map((_, i) => {
                            const fullStars = Math.floor(item.rating);
                            const halfStar = item.rating % 1 !== 0;

                            let startype;
                            if (i < fullStars) {
                                startype = "star.svg";
                            } else if (i === fullStars && halfStar) {
                                startype = "star_half.svg";
                            } else {
                                startype = "star_outline.svg";
                            }
                            return (
                                <img
                                    key={i}
                                    src={require(`../assets/icons/${startype}`)}
                                    alt=""
                                />
                            );
                        })}

                        <div className="product-commend">
                            <a href="">
                                <img
                                    src={
                                        require("../assets/icons/message.svg")
                                            .default
                                    }
                                    alt=""
                                />
                                {item.comments_count} comment
                            </a>
                        </div>
                    </div>

                    <div className="product-sizes">
                        <div className="product-size-top">
                            <h3>Select Size</h3>
                            <a href="">
                                Size Guide
                                <img
                                    src={
                                        require("../assets/icons/arrow-right.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="product-size-bottom">
                            <ul>
                                {item.size.map((size) => (
                                    <li key={size}>
                                        <button
                                            key={size}
                                            className={
                                                selectedSize === size
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() =>
                                                setSelectedSize(size)
                                            }
                                        >
                                            {size}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="product-colors">
                        <h3>Colours Available</h3>
                        <div className="colors">
                            {item.colors.map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    className={
                                        selectedColor === color ? "active" : ""
                                    }
                                    onClick={() => setSelectedColor(color)}
                                >
                                    <span className={`color ${color}`}></span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="product-buy">
                        <button
                            onClick={() => toggleCart(item)}
                            className="add-cart"
                        >
                            <img
                                src={
                                    require("../assets/icons/cart-1.svg")
                                        .default
                                }
                                alt=""
                            />
                            Add to cart
                        </button>
                        <button className="product-price">
                            $ {item.price}
                        </button>
                    </div>

                    <div className="product-offers">
                        <ul>
                            <li>
                                <span>
                                    <img
                                        src={
                                            require("../assets/icons/credit card.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </span>
                                <p>Secure payment</p>
                            </li>
                            <li>
                                <span>
                                    <img
                                        src={
                                            require("../assets/icons/Size&Fit.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </span>
                                <p>Size & Fit</p>
                            </li>
                            <li>
                                <span>
                                    <img
                                        src={
                                            require("../assets/icons/truck.svg")
                                                .default
                                        }
                                    />
                                </span>
                                <p>Free Shipping</p>
                            </li>
                            <li>
                                <span>
                                    <img
                                        src={
                                            require("../assets/icons/Free-Shipping&Returns.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </span>
                                <p>Free Shipping & Return</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="product-description">
                <div className="wrapper">
                    <div className="p-d-left">
                        <h3 className="new-arrivalt">
                            <div></div>
                            Product Description
                        </h3>

                        <div className="product-feedback">
                            <div className="top">
                                <ul>
                                    <li>
                                        <button
                                            type="button"
                                            className="d-button"
                                        >
                                            <h3 className="active">
                                                Description
                                            </h3>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="d-button"
                                        >
                                            <h3>User comments</h3>
                                            <span>21</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="d-button"
                                        >
                                            <h3>Question & Answer</h3>
                                            <span className="black">4</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="bottom">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-d-right">
                        <table className="product-table">
                            <tr>
                                <td>
                                    <h3>Fabric</h3>
                                    <p>
                                        <strong>{item.model.fabric}</strong>
                                    </p>
                                </td>
                                <td>
                                    <h3>Pattern</h3>
                                    <p>
                                        <strong>{item.model.pattern}</strong>
                                    </p>
                                </td>
                                <td>
                                    <h3>Fit</h3>
                                    <p>
                                        <strong>{item.model.Fit}</strong>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>Neck</h3>
                                    <p>
                                        <strong>{item.model.Neck}</strong>
                                    </p>
                                </td>
                                <td>
                                    <h3>Sleeve</h3>
                                    <p>
                                        <strong>{item.model.Sleeve}</strong>
                                    </p>
                                </td>
                                <td>
                                    <h3>Style</h3>
                                    <p>
                                        <strong>{item.model.Style}</strong>
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>

            <section id="similar-products">
                <div className="wrapper">
                    <div className="limelight">
                        <h3 className="new-arrivalt">
                            <div></div>
                            Similar Products
                        </h3>

                        <div className="limelight-container">
                            {similarItems.slice(0, 4).map((item) => (
                                <div className="limelight-items">
                                    <div className="top">
                                        <Link to={`/Items/${item.id}`}>
                                            <img
                                                src={require(`../assets/images/${item.image}`)}
                                                alt=""
                                                className="main"
                                            />
                                        </Link>

                                        <button
                                            onClick={() => toggleWishlist(item)}
                                            className="wishlist-btn"
                                            style={{
                                                background: isWishlisted(item)
                                                    ? "red"
                                                    : "white",
                                            }}
                                        >
                                            <img
                                                src={
                                                    require("../assets/icons/wishlist.svg")
                                                        .default
                                                }
                                                alt=""
                                                className="wishlist"
                                            />
                                        </button>
                                    </div>
                                    <div className="bottom">
                                        <Link to={`/Items/${item.id}`}>
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
                </div>
            </section>

            <Footer />
        </>

        // <div className="limelight">
        //     {/* Display selected product */}
        //     <section id="product-section">
        //         <div className="product-left">
        //             <div className="product-images">
        //                 <div className="image-products">
        //                     <a className="product-list-btn" href="">
        //                         <img
        //                             src={require(`../assets/images/${item.image}`)}
        //                             alt={item.name}
        //                         />
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="product-button">
        //                 <a href="" className="up-button">
        //                     <img
        //                         src={
        //                             require("../assets/icons/left (Stroke).svg")
        //                                 .default
        //                         }
        //                         alt=""
        //                     />
        //                 </a>
        //                 <a href="" className="down-arrow">
        //                     <img
        //                         src={
        //                             require("../assets/icons/left (Stroke) (1).svg")
        //                                 .default
        //                         }
        //                         alt=""
        //                     />
        //                 </a>
        //             </div>
        //         </div>

        //         <div className="product-right">
        //             <h3 className="product-name">{item.name}</h3>
        //             <div className="product-rating">
        //                 <a href="" className="product-ratingg">
        //                     <img
        //                         src={
        //                             require("../assets/icons/star.svg").default
        //                         }
        //                         alt=""
        //                     />
        //                     <span>{item.rating}</span>
        //                 </a>
        //             </div>

        //             <div className="product-buy">
        //                 <button className="add-cart">
        //                     <img
        //                         src={
        //                             require("../assets/icons/cart-1.svg")
        //                                 .default
        //                         }
        //                         alt=""
        //                     />
        //                     Add to cart
        //                 </button>
        //                 <button className="product-price">${item.price}</button>
        //             </div>
        //         </div>
        //     </section>

        //     {/* Display Similar Products */}
        //     <section id="similar-products">
        //         <div className="wrapper">
        //             <h3 className="new-arrivalt">
        //                 <div></div>
        //                 Similar Products
        //             </h3>

        //             <div className="limelight-container">
        //                 {similarItems.map((similarItem) => (
        //                     <div
        //                         key={similarItem.id}
        //                         className="limelight-items"
        //                     >
        //                         <div className="top">
        //                             <img
        //                                 src={require(`../assets/images/${similarItem.image}`)}
        //                                 alt={similarItem.name}
        //                                 className="main"
        //                             />
        //                             <button
        //                                 className="wishlist-btn"
        //                                 onClick={() =>
        //                                     toggleWishlist(similarItem)
        //                                 }
        //                                 style={{
        //                                     background: isWishlisted(
        //                                         similarItem
        //                                     )
        //                                         ? "red"
        //                                         : "white",
        //                                 }}
        //                             >
        //                                 <img
        //                                     src={WishListBtn}
        //                                     alt="Wishlist"
        //                                     className="wishlist"
        //                                 />
        //                             </button>
        //                         </div>
        //                         <div className="bottom">
        //                             <Link to={`/Items/${similarItem.id}`}>
        //                                 <div className="limelight-bottom-l">
        //                                     <h3>{similarItem.name}</h3>
        //                                     <p>{similarItem.brand}</p>
        //                                 </div>
        //                                 <div className="limelight-bottom-r">
        //                                     <p>${similarItem.price}</p>
        //                                 </div>
        //                             </Link>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </section>
        // </div>
    );
}

export default Items;
