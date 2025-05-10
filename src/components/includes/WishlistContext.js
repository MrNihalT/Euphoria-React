import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (item) => {
        const exists = wishlist.find((w) => w.id === item.id);
        if (exists) {
            setWishlist(wishlist.filter((w) => w.id !== item.id)); 
        } else {
            setWishlist([...wishlist, item]); 
        }
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
