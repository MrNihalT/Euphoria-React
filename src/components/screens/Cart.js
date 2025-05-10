import React, { useContext } from "react";
import { CartContext } from "../includes/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, toggleCart, incrementQuantity, decrementQuantity } =
        useContext(CartContext);

    return (
        <WishlistContainer>
            <WishlistHeading>Your Cart</WishlistHeading>
            {cart.length === 0 ? (
                <WishlistNoItem>No items in your cart.</WishlistNoItem>
            ) : (
                <WishlistPage>
                    {cart.map((item) => (
                        <WishlistItem key={item.id}>
                            <Link to={`/Items/${item.id}`}>
                                <WishlistImage
                                    src={require(`../assets/images/${item.image}`)}
                                    alt={item.name}
                                />
                            </Link>

                            <WishlistName>{item.name}</WishlistName>
                            <WishlistPrice>
                                Price ${(item.price * item.quantity).toFixed(2)}
                            </WishlistPrice>

                            <QunatitySection>
                                <QunatityDecrement
                                    onClick={() => decrementQuantity(item)}
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </QunatityDecrement>
                                <QunatitySpan>{item.quantity}</QunatitySpan>
                                <QunantityIncrement
                                    onClick={() => incrementQuantity(item)}
                                >
                                    +
                                </QunantityIncrement>
                            </QunatitySection>

                            <WishlistButton onClick={() => toggleCart(item)}>
                                Remove
                            </WishlistButton>
                        </WishlistItem>
                    ))}
                </WishlistPage>
            )}
        </WishlistContainer>
    );
}
const WishlistContainer = styled.div`
    padding: 50px 30px;
    overflow: hidden;
`;
const WishlistHeading = styled.h1`
    font-size: 36px;
    color: #00000;
    font-weight: 700;
    margin-bottom: 20px;
`;
const WishlistNoItem = styled.p``;
const WishlistPage = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
`;
const WishlistItem = styled.a`
    width: 200px;
    height: 100%;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(0.99);
    }
    border-radius: 8px;
`;
const WishlistImage = styled.img`
    width: 100%;
    object-fit: cover;
`;
const WishlistName = styled.h3`
    font-size: 20px;
    color: #00000;
    font-weight: 500;
`;
const WishlistButton = styled.button`
    background-color: #8a33fd;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    width: 100%;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #f6f6f6;
        color: #000;
        border: 1px solid #d1d1d1;
    }
`;
const WishlistPrice = styled.p`
    font-size: 18px;
`;
const QunatitySection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const QunatityButton = styled.button``;
const QunatitySpan = styled.span``;
const QunantityIncrement = styled.button`
    font-size: 25px;
    background-color: rgb(209, 193, 193);
    font-weight: 500;
    border-radius: 6px;
    height: 30px;
    width: 30px;
`;
const QunatityDecrement = styled.button`
    font-size: 25px;
    background-color: rgb(209, 193, 193);
    font-weight: 500;
    border-radius: 6px;
    height: 30px;
    width: 30px;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #000;
`;
