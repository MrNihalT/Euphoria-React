import React, { useState } from "react";

function Footer(props) {
    const [isCategoryOpne, setIsCategoryOpen] = useState(false);

    const toggleCategory = () => {
        setIsCategoryOpen((prev) => !prev);
    };

    return (
        <footer>
            <div className="wrapper">
                <div className="boundry">
                    <div className="footer-items">
                        <ul>
                            <li>
                                <h3>Need Help</h3>
                                <a href="">Contact Us</a>
                                <a href="">Track Order</a>
                                <a href="">Returns & Refunds</a>
                                <a href="">FAQ's</a>
                                <a href="">Career</a>
                            </li>
                            <li>
                                <h3>Company</h3>
                                <a href="">About Us</a>
                                <a href="">euphoria Blog</a>
                                <a href="">euphoriastan</a>
                                <a href="">Collaboration</a>
                                <a href="">Media</a>
                            </li>
                            <li>
                                <h3>More Info</h3>
                                <a href="">Term and Conditions</a>
                                <a href="">Privacy Policy</a>
                                <a href="">Shipping Policy</a>
                                <a href="">Sitemap</a>
                            </li>
                            <li>
                                <h3>Location</h3>
                                <a href="mailto:nihal.chiyoor@gmail.com">
                                    support@euphoria.in
                                </a>
                                <a href="">
                                    Eklingpura Chouraha, Ahmedabad Main Road
                                </a>
                                <a href="">
                                    (NH 8- Near Mahadev Hotel) Udaipur, India-
                                    313002
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-connect">
                        <div className="social-media">
                            <a target="_blank" href="https://www.facebook.com">
                                <button>
                                    <img
                                        src={
                                            require(`../assets/icons/facebook.svg`)
                                                .default
                                        }
                                        alt="Facebook"
                                    />
                                </button>
                            </a>
                            <a target="_blank" href="https://www.instagram.com">
                                <button>
                                    <img
                                        src={
                                            require(`../assets/icons/instagram.svg`)
                                                .default
                                        }
                                        alt="Instagram"
                                    />
                                </button>
                            </a>
                            <a target="_blank" href=" https://www.twitter.com">
                                <button>
                                    <img
                                        src={
                                            require(`../assets/icons/twitter.svg`)
                                                .default
                                        }
                                        alt="Twitter"
                                    />
                                </button>
                            </a>
                            <a target="_blank" href=" https://www.linkedin.com">
                                <button>
                                    <img
                                        src={
                                            require(`../assets/icons/linkedin.svg`)
                                                .default
                                        }
                                        alt="Linkedin"
                                    />
                                </button>
                            </a>
                        </div>
                        <div className="apps">
                            <h3>Download The App</h3>
                            <div className="app">
                                <a href="">
                                    <img
                                        src={
                                            require(`../assets/icons/playstore.svg`)
                                                .default
                                        }
                                        alt="PlayStore"
                                    />
                                    <div className="right">
                                        <span>android app on</span>
                                        <h3>Google Play</h3>
                                    </div>{" "}
                                </a>
                                <a href="">
                                    <img
                                        src={
                                            require(`../assets/icons/phone.svg`)
                                                .default
                                        }
                                        alt="Phone"
                                    />
                                    <div className="right">
                                        <span>Available on the</span>
                                        <h3>App Store</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="popular-categories">
                    <div className="boundry">
                        <div className="top">
                            <div className="left">
                                <h3>Popular Categories</h3>
                            </div>
                            <div className="right">
                                <button
                                    className="category-button"
                                    onClick={toggleCategory}
                                >
                                    <img
                                        className="up-arrow"
                                        src={
                                            require(`../assets/icons/arrow-down.svg`)
                                                .default
                                        }
                                        alt="Arrow Down"
                                        style={{
                                            transform: isCategoryOpne
                                                ? "rotate(180deg)"
                                                : "rotate(0deg)",
                                            transition: "transform 0.3s ease",
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                        <div
                            className="bottom-category"
                            style={{
                                display: isCategoryOpne ? "block" : "none",
                                opacity: isCategoryOpne ? 1 : 0,
                                transition: "opacity 0.3s ease",
                            }}
                        >
                            <ul>
                                <li>
                                    <h3>Need Help</h3>
                                    <a href="">Contact Us</a>
                                    <a href="">Track Order</a>
                                    <a href="">Returns & Refunds</a>
                                    <a href="">FAQ's</a>
                                    <a href="">Career</a>
                                </li>
                                <li>
                                    <h3>Company</h3>
                                    <a href="">About Us</a>
                                    <a href="">euphoria Blog</a>
                                    <a href="">euphoriastan</a>
                                    <a href="">Collaboration</a>
                                    <a href="">Media</a>
                                </li>
                                <li>
                                    <h3>More Info</h3>
                                    <a href="">Term and Conditions</a>
                                    <a href="">Privacy Policy</a>
                                    <a href="">Shipping Policy</a>
                                    <a href="">Sitemap</a>
                                </li>
                                <li>
                                    <h3>Location</h3>
                                    <a href="mailto:nihal.chiyoor@gmail.com">
                                        support@euphoria.in
                                    </a>
                                    <a href="">
                                        Eklingpura Chouraha, Ahmedabad Main Road
                                    </a>
                                    <a href="">
                                        (NH 8- Near Mahadev Hotel) Udaipur,
                                        India- 313002
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <span>
                        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights
                        reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
