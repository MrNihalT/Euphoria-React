import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./components/assets/css/style.css";
import "./App.css";

import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";

import Spotlight from "./components/screens/Spotlight";
import DealSection from "./components/screens/DealSection";
import NewArrival from "./components/screens/NewArrival";
import CategoriesMen from "./components/screens/CategoriesMen";
import CategoriesWomen from "./components/screens/CategoriesWomen";
import Brands from "./components/screens/Brands";
import Limelight from "./components/screens/Limelight";
import Feedback from "./components/screens/Feedback";
import Wishlist from "./components/includes/Wishlist"; // 🔥 Add this
import { WishlistProvider } from "./components/includes/WishlistContext";
import Items from "./components/screens/Items";
import { CartProvider } from "./components/includes/CartContext";
import Cart from "./components/screens/Cart";

function Home() {
    return (
        <>
            <Header />
            <Spotlight />

            <section id="deals">
                <div className="wrapper">
                    <DealSection />

                    <h3 className="new-arrivalt">
                        <div></div>
                        New Arrival
                    </h3>

                    <NewArrival />

                    <div className="deal-fashion">
                        <div className="fashion-left">
                            <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
                            <p>
                                In our journey to improve everyday fashion,
                                euphoria presents EVERYDAY wear range -
                                Comfortable & Affordable fashion 24/7
                            </p>
                            <a href="#men-section">
                                <button type="button">Shop Now</button>
                            </a>
                        </div>
                        <div className="fashion-right"></div>
                    </div>
                </div>
            </section>

            <section id="categories">
                <div className="wrapper">
                    <CategoriesMen />
                    <CategoriesWomen />
                    <Brands />
                    <Limelight />
                    <Feedback />
                </div>
            </section>

            <Footer />
        </>
    );
}

function App() {
    return (
        <WishlistProvider>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<Home />} />
                        <Route path="/Items/:id" element={<Items />} />
                    </Routes>
                </Router>
            </CartProvider>
        </WishlistProvider>
    );
}

export default App;
