import React, { useContext } from "react";
import { WishlistContext } from "../includes/WishlistContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Wishlist() {
    const { wishlist, toggleWishlist } = useContext(WishlistContext);
    console.log(wishlist);
    console.log(wishlist);
    return (
        <WishlistContainer>
            <WishlistHeading>Your Wishlist</WishlistHeading>
            {wishlist.length === 0 ? (
                <WishlistNoItem>No items in your wishlist.</WishlistNoItem>
            ) : (
                <WishlistPage>
                    {wishlist.map((item) => (
                        <WishlistItem key={item.id}>
                            <Link to={`/Items/${item.id}`}>
                                <WishlistImage
                                    src={require(`../assets/images/${item.image}`)}
                                    alt={item.name}
                                />
                            </Link>
                            <WishlistName>{item.name}</WishlistName>
                            <WishlistButton
                                onClick={() => toggleWishlist(item)}
                            >
                                Remove
                            </WishlistButton>
                        </WishlistItem>
                    ))}
                </WishlistPage>
            )}
        </WishlistContainer>
    );
}

export default Wishlist;
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
