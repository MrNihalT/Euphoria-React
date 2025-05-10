import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    
    const toggleCart = (item) => {
        const exists = cart.find((c) => c.id === item.id);
        if (exists) {
            setCart(cart.filter((c) => c.id !== item.id));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const incrementQuantity = (item) => {
        setCart(
            cart.map((c) =>
                c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
            )
        );
    };

    const decrementQuantity = (item) => {
        setCart(
            cart
                .map((c) => {
                    if (c.id === item.id) {
                        const q = c.quantity - 1;
                        return q > 0 ? { ...c, quantity: q } : null;
                    }
                    return c;
                })
                .filter(Boolean)
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, toggleCart, incrementQuantity, decrementQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};
