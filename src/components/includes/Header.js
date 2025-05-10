import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [activeIndex, setActiveIndex] = useState(null);

    const navItems = ["Shop", "Men", "Women", "Combos", "Joggers"];

    const handleNavClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const getHref = (item) => {
        if (item === "Shop") return "#categories";
        if (item === "Men") return "#men-section";
        if (item === "Women") return "#women-section";
        // you can add more cases for Combos & Joggers if needed
        return "#limelight";
    };

    return (
        <header>
            <div className="wrapper">
                <nav>
                    {/* Logo */}
                    <div className="header-left">
                        <h1>
                            <a href="/">
                                <img
                                    src={
                                        require(`../assets/icons/Logo.svg`)
                                            .default
                                    }
                                    alt="Logo"
                                />
                            </a>
                        </h1>
                    </div>

                    {/* Desktop Nav */}
                    <div className="header-middle">
                        <ul className="nav-links">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={getHref(item)}
                                        className={
                                            index === activeIndex
                                                ? "nav-links-active"
                                                : ""
                                        }
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(index);
                                            window.location.hash =
                                                getHref(item);
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Search Bar */}
                    <div className="header-search">
                        <form action="" method="get">
                            <button type="submit">
                                <img
                                    src={
                                        require(`../assets/icons/search.svg`)
                                            .default
                                    }
                                    alt="Search"
                                />
                            </button>
                            <input
                                type="text"
                                name="search"
                                placeholder="Search"
                            />
                        </form>
                    </div>

                    {/* Right Side Icons */}
                    <div className="header-right">
                        <ul>
                            <li>
                                <span>
                                    <Link to="/Wishlist">
                                        <img
                                            src={
                                                require(`../assets/icons/wishlist.svg`)
                                                    .default
                                            }
                                            alt="Wishlist"
                                        />
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a href="#">
                                        <img
                                            src={
                                                require(`../assets/icons/account.svg`)
                                                    .default
                                            }
                                            alt="Account"
                                        />
                                    </a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <Link to={"/cart"}>
                                        <img
                                            src={
                                                require(`../assets/icons/cart.svg`)
                                                    .default
                                            }
                                            alt="Cart"
                                        />
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="menubar">
                        <button id="menu-button">
                            <img
                                src={
                                    require(`../assets/icons/menu.svg`).default
                                }
                                alt="Menu"
                            />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu">
                <ul className="nav-links">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className={
                                    index === activeIndex
                                        ? "nav-links-active"
                                        : ""
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(index);
                                }}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;
